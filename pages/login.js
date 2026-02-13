import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if(error) setError(error.message);
    else router.push("/dashboard");
  }

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h2>Login AI Studio Pro</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{display:"block",marginBottom:10,padding:8}}/>
        <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} required style={{display:"block",marginBottom:10,padding:8}}/>
        <button style={{padding:10}}>Entrar</button>
      </form>
      {error && <p style={{color:"red",marginTop:10}}>{error}</p>}
    </div>
  )
}
