import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    // Lógica para login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Lógica para cadastro
    console.log('Novo Usuário - Email:', email);
    console.log('Novo Usuário - Password:', password);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>{isNewUser ? 'Cadastro' : 'Login'}</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={isNewUser ? handleRegister : handleLogin}>
            {isNewUser ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>
        <p onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Já tem uma conta? Faça login' : 'Ainda não tem uma conta? Cadastre-se'}
        </p>
      </div>
    </div>
  );
}

export default Home;
