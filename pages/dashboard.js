export default function Dashboard() {
  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao AI Studio Pro.</p>

      <div style={{marginTop:20,padding:20,border:"1px solid #ddd",borderRadius:10}}>
        <h3>Plano Atual: Free</h3>
        <p>Upgrade para Pro para desbloquear recursos avançados.</p>
        <a href="/upgrade"><button style={{padding:10,marginTop:10}}>Upgrade para Pro</button></a>
        <button
          onClick={async () => {
            const res = await fetch('/api/generate', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ prompt:'Um robô estilizado' }) });
            const data = await res.json();
            window.open(data.url, '_blank');
          }}
          style={{padding:10,marginTop:20,display:"block"}}
        >
          Gerar Imagem IA
        </button>
      </div>
    </div>
  )
}
