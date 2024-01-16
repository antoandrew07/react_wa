import './App.css'
function App() {
  const openWhatsAppChat = () => {
    // Replace '123456789' with the phone number or ID of the chat you want to open
    const phoneNumber = '+919702440369';
    
    // Construct the WhatsApp deep link
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    // Open the WhatsApp deep link in a new tab or window
    window.open(whatsappLink, '_blank');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Koala🐨Tom😺</h1>
        <button onClick={openWhatsAppChat}>Open WhatsApp Chat</button>
      </header>
    </div>
  );
}

export default App;
