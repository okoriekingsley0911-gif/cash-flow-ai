function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'Arial',
      backgroundColor: '#0a0a0a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#00ff88' }}>CASHFLOW AI 💰</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        Earn money completing real tasks. Powered by AI.
      </p>
      <p>Built by CEO Kingsley</p>
    <a 
  href="https://wa.me/2349112885397?text=Hi%20CEO%20Kingsley%2C%20I%20want%20to%20start%20earning%20with%20CASHFLOW%20AI%20💰" 
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  <button style={{
    padding: '15px 30px',
    background: '#00ff88',
    color: 'black',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    marginTop: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }}>
    Start Earning Now
  </button>
</a>
    </div>
  )
}

export default App
