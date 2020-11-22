chrome.runtime.onInstalled.addListener(function() {
    let install_time : Date =new Date()
    chrome.storage.sync.set({
        'time_installed': install_time.getTime(),
        'logo_attribution': "Created by the creative outlet from Noun Project.",
        'saved_items': []}, () => { console.log("installed time was: " + install_time.toLocaleDateString("en-US"))})
})


function debug_read_storage() {
    chrome.storage.sync.get((items) => console.log(items))
}