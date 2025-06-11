import { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [form, setForm] = useState({ name: '', email: '', content: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/messages', form);
    alert('Submitted');
    setForm({ name: '', email: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" />
      <textarea name="content" placeholder="Message" value={form.content} onChange={handleChange} className="border p-2 w-full"></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
    </form>
  );
}
export default UserForm;
