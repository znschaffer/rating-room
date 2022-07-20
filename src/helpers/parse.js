import {normalize }from './normalize';

/**
 * @param {string} slug Slug of a product name
 * @returns Normalized slug with all dashes replaced with spaces
 */
export function parseSlug(slug) {
    return normalize(slug).replaceAll("-", " ")
}

/**
 * @param {string} name Product name
 * @returns Normalized name with all spaces replaced with '-'
 */
export function parseName(name) {
    return normalize(name).replaceAll(" ","-")
}