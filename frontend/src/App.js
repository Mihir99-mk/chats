import React, { useEffect } from 'react';
import './App.css';
import {io} from 'socket.io-client';
import Input from './Input';

function App() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
    
  const socket = io('http://localhost:4000');

    useEffect(()=>{

      socket.on("connect", () => {
        console.log(socket.id + " connected"); 
      })
  
      socket.on('join', (d)=>{
        console.log(d);
      })
    socket.emit('userJoin', 'Hello from client');

    }, [socket])

  const handleChange = (e) => {
    e.preventDefault();
    socket.emit('chat', message);
    socket.on('msg',(ms)=>{
      setMessages(ms);
    })
    setMessage('');
  }


    
  return (
  <>
    <div className="App">

      <div className='con'>
       
        <form onSubmit={handleChange}>
        <Input message={messages} />

        <input type="text" value={message} onChange={e=>{setMessage(e.target.value)}} placeholder="Enter your message !!" />

          <button type="submit">Send</button>
        </form>
      </div>
      
    </div>
  </>

  );
}

export default App;
