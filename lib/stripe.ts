import Stripe from 'stripe'

export const stripe = new Stripe(process.env.NEXT_SECRET_STRIE_SECRET_KEY!,{
    apiVersion:"2023-08-16"
})