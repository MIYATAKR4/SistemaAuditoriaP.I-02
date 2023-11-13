import React, { useState } from 'react'
import Input from '../../components/login-screen/input/Input'
import Buttons from '../../components/login-screen/buttons/Buttons';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [ registration, setRegistration ] = useState("");
  const [ password,  setPassword ]  = useState("");
  const [ error, setError ] = useState("");

  const handleLogin = () => {
    if (!registration || !password) {
      setError("Preencha todos os campos");
      return;
    }
  
    const res = signIn(registration, password);
    if (res) {
      setError(res);
      return;
    };

    navigate("/form");
  }

  return (
      <div>
      <C.Container>
        <img src="public\logo.jpg" alt="Logo" style={{height:"100px", width: "200px"}} />
        <C.Content>
      <C.Label>LOGIN</C.Label>
          <Input 
            type="text"
            placeholder="Digite seu número de Matrícula"
            value={registration}
            onChange={(e) => [setRegistration(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <C.Error>{error}</C.Error>
          <Buttons Text="Entrar" onClick={handleLogin} />
          <C.SignUp>
            Não tem uma conta? <C.Strong><Link to="/signup">&nbsp;Registre-se</Link></C.Strong>
          </C.SignUp>
        </C.Content>
      </C.Container>
      </div>
  )
}

export default Login;
