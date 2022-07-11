import SanityClientConstructor from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'
import {api} from '../../backend/sanity.json'
const {projectId, dataset} = api
export const client = SanityClientConstructor({
    projectId,
    dataset,
    apiVersion: '2022-07-07',
    useCdn: true
})
const builder = ImageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}