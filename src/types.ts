export interface StorageState extends SavedItems {
    time_installed: number,
    logo_attribution: string,
}

export const saved_items_key: string = "saved_items"
export interface SavedItems {
    saved_items: Item[]
}

export interface Item {
    title: string,
    url: string
}

export const AppPrimaryColor: string = "#C757FD"
