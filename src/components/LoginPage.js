import React, { useState } from 'react';
import '../css-files/LoginPage.css'; // CSS dosyasını import ediyoruz

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Burada giriş doğrulama işlemlerini ekleyebilirsiniz
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="checkbox-container">
          <input type="checkbox" id="keep-logged" />
          <label htmlFor="keep-logged">Keep me logged in</label>
        </div>

        <button type="submit" className="login-button">
          Log in with e-mail
        </button>

        <p className="reset-password">
          Have you forgotten your password? <a href="/reset">Reset Password</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
