import { StorageState, saved_items_key, CHROME_BOOKMARKS_ROOT_ID, LISTO_ROOT_FOLDER_NAME, CHROME_OTHER_BOOKMARKS } from "./types"
import { Theme } from "./components/Theme"

/** Set the initial state for the extension. */
chrome.runtime.onInstalled.addListener(function() {
    let install_time : Date =new Date()
    let initial_state : StorageState = {
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []}

    chrome.storage.sync.set(initial_state, () => {
            console.log("installed time was: " + install_time.toLocaleTimeString("en-US"))
        })

    chrome.bookmarks.getChildren(CHROME_BOOKMARKS_ROOT_ID, (topLevelFolders) => {
        let otherBookmarksRoot = topLevelFolders.find((folder) => folder.title === CHROME_OTHER_BOOKMARKS)
        if (otherBookmarksRoot) {
            findOrCreateListoRootInFolder(otherBookmarksRoot)
        } else if(topLevelFolders.length > 0) {
            findOrCreateListoRootInFolder(topLevelFolders[0])
        } else {
            console.error("Cannot access bookmarks folder")
        }
    })
})

function findOrCreateListoRootInFolder(rootFolder: chrome.bookmarks.BookmarkTreeNode) {
    chrome.bookmarks.getChildren(rootFolder.id, (bookmarks) => {
        let listoFolder = bookmarks.find((nodes) => nodes.title === LISTO_ROOT_FOLDER_NAME && nodes.url === undefined)
        if (listoFolder) {
            setListoRootFolderId(rootFolder.title, listoFolder!!.id)
        } else {
            chrome.bookmarks.create({parentId: rootFolder.id, title: LISTO_ROOT_FOLDER_NAME}, 
                (bookmark) => setListoRootFolderId(rootFolder.title, bookmark.id))
        }
    })
}

function setListoRootFolderId(rootFolderName: string, folderId: string) {
    chrome.storage.sync.set({'listo_root_folder_id': folderId}, () => console.log(`listo folder id set. Folder in ${rootFolderName}`))
}

/** React to changes to saved_items and update the Badge. */
chrome.storage.onChanged.addListener(function(changes) {
    let saved_items = changes[saved_items_key]
    if (changes.hasOwnProperty(saved_items_key)) {
        const num_items: number = saved_items.newValue.length
        if (num_items > 9) {
            chrome.browserAction.setBadgeBackgroundColor({color: Theme.palette.primary.dark})
            chrome.browserAction.setBadgeText({text: "9+"})
        } else if (num_items == 0) {
            chrome.browserAction.setBadgeText({text: ""})
        } else {
            chrome.browserAction.setBadgeBackgroundColor({color: Theme.palette.primary.dark})
            chrome.browserAction.setBadgeText({text: num_items.toLocaleString("en-US")})
        }
    }
})
