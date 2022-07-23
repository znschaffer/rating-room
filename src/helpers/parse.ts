/* Removes casing and trims trailing/leading whitespace from string */
export const normalize = (str: string): string => str.toLowerCase().trim();

/* Parses a slug to return normalized name with all dashes replaced with spaces */
export const  parseSlug = (slug: string): string => normalize(slug).replaceAll('-', ' ');

/* Parses a name to return normalized slug with all spaces replaced with dashes */
export const parseName = (name: string):string => normalize(name).replaceAll(' ', '-');
