import type { Tag, Product } from "$types";
import  { writable, type Writable } from "svelte/store";

export const products:Writable<Product[]> = writable([])
export const emotions:Writable<Emotion[]>  = writable([])
export const tags:Writable<Tag[]> = writable([])


export const productsView = writable([])
export const currentProduct = writable({})
export const filters = writable({ selectedCat: 0, selectedRating: 0 })