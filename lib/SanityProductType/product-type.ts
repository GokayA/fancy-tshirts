import { Image } from "sanity"

export interface SanityProduct {
    _id: string
    _createdAt: Date
    id: string
    name: string
    image: string
    images: Image[]
    categories: string[]
    sizes: string[]
    colors: string[]
    price: number
    currency: string
    description: string
    sku: string
    slug: string
  }
  
 