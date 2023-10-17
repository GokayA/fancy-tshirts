import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function constructMetadata({
title="Fancy Tshirts",
description='Fancy tshirts an e-commerce website that you can buy tshirt with cards implemented with stripe.',
image='/logo.png',
icons="/favicon.ico",
noIndex = false
}:{
  title?:string
  description?:string
  image?:string
  icons?:string
  noIndex?:boolean
}={}):Metadata{
  return{
    title,
    description,
    openGraph:{
      title,
      description,
      images:[
        {
          url:image
        }
      ]
    },
    twitter:{
      card:"summary_large_image",
      title,
      description,
      images:[image],
      creator:"@Olurrolurrr"
    },
    icons,
    metadataBase:new URL('https://fancy-tshirts.vercel.app'),
    themeColor:'#FFF',
    ...(noIndex && {
      robots:{
        index:false,
        follow:false,
      }
    })
  }
}

