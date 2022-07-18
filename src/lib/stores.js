import  { writable } from "svelte/store";

export const products = writable([])
export const currentProduct = writable({})
export const productsView = writable([])
export const emotions = writable([])

export const tags = writable([])