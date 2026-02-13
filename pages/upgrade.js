import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Upgrade() {
  const handleUpgrade = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/checkout', { method:'POST' });
    const data = await res.json();
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h2>Upgrade para Pro</h2>
      <p>Desbloqueie recursos avançados com seu plano Pro.</p>
      <button onClick={handleUpgrade} style={{padding:10,marginTop:20}}>Pagar e Ativar</button>
    </div>
  )
}
