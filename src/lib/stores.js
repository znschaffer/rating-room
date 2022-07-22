import  { writable } from "svelte/store";

export const products = writable([])
export const emotions = writable([])
export const tags = writable([])


export const productsView = writable([])
export const currentProduct = writable({})
export const filters = writable({ selectedCat: 0, selectedRating: 0 })