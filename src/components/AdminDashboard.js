js
import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/messages').then(res => setMessages(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Submitted Messages</h2>
      <ul className="space-y-2">
        {messages.map(m => (
          <li key={m.id} className="border p-2">
            <strong>{m.name}</strong> ({m.email})<br />
            {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AdminDashboard;
