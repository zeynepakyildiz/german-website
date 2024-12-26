import React, { useState } from 'react';
import '../css-files/SignupPage.css';
function Signup() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'Name:',
      name,
      'Surname:',
      surname,
      'E-mail:',
      email,
      'Password:',
      password
    );
    // Burada giriş doğrulama işlemlerini ekleyebilirsiniz
  };

  return (
    <div className="signup-container">
      <div className="main-title">Sign Up for DeutschLernen</div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="Surname">Surname</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
