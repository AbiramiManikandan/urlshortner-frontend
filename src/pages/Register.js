import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      await axios.post('https://urlshortener-backend.onrender.com/auth/register', formData);
      alert('Registration successful. Check your email to activate your account.');
      window.location.href = '/';
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      <input type="text" placeholder="Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
