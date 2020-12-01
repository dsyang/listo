/** Shape of data stored in chrome.storage */
export interface StorageState extends SavedItems {
    time_installed: number,
    logo_attribution: string,
}

/** The bulk of the data stored in chrome.storage, saved items */
export const saved_items_key: string = "saved_items"
export interface SavedItems {
    saved_items: Item[]
}

/** Each individual item stored in chrome.storage */
export interface Item {
    title: string,
    url: string,
    favicon_url: string,
}

export const NO_FAVICON: string = ""

/** Props for the different buttons. */
export interface ActionButtonProps {
    title: string,
    url: string,
    favicon_url: string,
}

export const CHROME_BOOKMARKS_ROOT_ID = "0"
export const CHROME_OTHER_BOOKMARKS = "Other bookmarks"
export const LISTO_ROOT_FOLDER_NAME = "Listos"