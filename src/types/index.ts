export interface Rating {
  "_key": string,
  "comments"?: string,
  "emotion"?: {
    "_ref": string,
    "_type": "reference"
  },
  "name": "xyn"|"zane",
  "rating"?: number
}

export interface Tag {
  "_createdAt": string,
  "_id": string,
  "_rev": string,
  "_type": "tag",
  "_updatedAt": string,
  "name": string
}

export interface Ref {
  "_key": string
  "_ref": string
  "_type": "reference"|"tag"
}
export interface Product {
  "_createdAt": string,
  "_id": string,
  "_rev": string,
  "_type": "product",
  "_updatedAt": string,
  "description": string,
  "image"?: {
    "_type": "image",
    "asset": {
      "_ref": string,
      "_type": "reference"
    }
  },
  "name": string,
  "rating"?: Ref[],
  "tags"?: Ref[]
}

