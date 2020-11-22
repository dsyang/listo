export interface StorageState extends SavedItems {
    time_installed: number,
    logo_attribution: string,
}

export interface SavedItems {
    saved_items: Item[]
}

export interface Item {
    title: string,
    url: string
}

export const AppPrimaryColor: string = "#C757FD"
