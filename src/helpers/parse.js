import {normalize }from './normalize';

export function parseSlug(slug) {
    return normalize(slug).replaceAll("-", " ")
}

export function parseName(name) {
    return normalize(name).replaceAll(" ","-")
}