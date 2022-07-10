export function parseSlug(slug) {
    return slug.replaceAll("_", " ")
}


export function parseName(name) {
    return name.replaceAll(" ","_")
}