import { SanityProduct } from '@/lib/SanityProductType/product-type';
import { stripe } from '@/lib/stripe';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
import {validateCartItems} from 'use-shopping-cart/utilities'

export async function POST(request:Request){
    const inventory = await client.fetch<
    SanityProduct[]
  >(groq`*[_type == "product"] {
    "id":_id ,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug":slug.current
  }`);
  const cartDetails = await request.json()
  console.log(">>>",inventory)
  console.log("2222",cartDetails)
    const lineItems = validateCartItems(inventory,cartDetails)
    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type:"pay",
        mode:"payment",
        payment_method_types:["card"],
        line_items:lineItems,
        billing_address_collection:"auto",
        success_url:`${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${origin}/cart`,
      shipping_address_collection:{
        allowed_countries:["US","TR","NL","GE"]
      }
    })
return NextResponse.json(session)
}