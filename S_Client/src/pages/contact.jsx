import { useState } from 'react';
import MainLook from '../components/MainLook.jsx';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleMessage = (m) => {
    setMessage(m.target.value);
  }

  const sendMessage = (s) => {
    if (email.trim() && message.trim() === '') {
      return;
    }
    setEmail('')
    setMessage('')
  }

  return (
    <MainLook>
      <div className="conatct_page">
        <h2>Let's Talk</h2>
        <div className="contact_modes">
          <div className="contact">
            <span className="contact_info">
              <h3>Contact Info</h3>
              <p>Email: techweb@gmail.com</p>
              <p>Phone: +254 (765) 432-100</p>
              <p>Address: 767 Pahali Street, Place Town, KE</p>
            </span>
            <span className="message">
              <h3>Contact Us</h3>
              <label htmlFor="email">Email:</label><br />
              <input type="email" className="email" id="email" value={email} onChange={handleEmail} placeholder="example@email.com" /><br /><br />

              <label htmlFor="message">Write To Us:</label><br />
              <textarea type="text" cols={40} rows={4} className="email" id="message" value={message} onChange={handleMessage} placeholder="Write a message"></textarea><br />
              <a href="mailto:techweb@gmail.com"><button onClick={sendMessage}>Send</button></a>
            </span>
          </div>
        </div>
      </div>
    </MainLook>
  )
}

export default Contact;
