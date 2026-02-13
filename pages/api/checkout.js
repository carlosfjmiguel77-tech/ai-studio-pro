import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Plano Pro' },
        unit_amount: 499,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/dashboard`,
    cancel_url: `${req.headers.origin}/dashboard`,
  });

  res.status(200).json({ id: session.id });
}
