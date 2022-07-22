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
  "rating"?: Rating[]
}

