import Link from "next/link"

export default function Home() {
  return (
    <div style={{fontFamily:"Arial",padding:40,textAlign:"center"}}>
      <h1 style={{fontSize:40}}>AI Studio Pro 🚀</h1>
      <p>Crie conteúdos com Inteligência Artificial.</p>

      <div style={{marginTop:30}}>
        <Link href="/login">
          <button style={{padding:"12px 20px",marginRight:10,background:"#000",color:"#fff",border:"none",borderRadius:8}}>Entrar</button>
        </Link>
        <Link href="/dashboard">
          <button style={{padding:"12px 20px",background:"#eee",border:"none",borderRadius:8}}>Dashboard</button>
        </Link>
      </div>
    </div>
  )
}
