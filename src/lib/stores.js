import  { writable } from "svelte/store";

export const products = writable([])
export const currentProduct = writable({})
export const productsView = writable([])