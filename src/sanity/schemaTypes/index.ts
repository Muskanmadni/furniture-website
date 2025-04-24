import { type SchemaTypeDefinition } from 'sanity'
import {product} from '@/sanity/schema/products'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
