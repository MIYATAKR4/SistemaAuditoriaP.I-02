import React, { useState } from 'react'
import Input from '../../components/login-screen/input/Input'
import Buttons from '../../components/login-screen/buttons/Buttons';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'


const Register = () => {
  const [register, setRegister] = useState('')
  const [password, setPassword] = useState('')
  const [confirmRegister, setConfirmRegister] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const { signUp } = useAuth();
 
  const handleRegister = () => {
    if (!register | !password | !confirmRegister) {
      setError('Preencha todos os campos');
      return;
    } else if (register !== confirmRegister) {
      setError('Os números de matrícula não coincidem');
      return;
    }

    const res = signUp(register, password);
    if (res) {
      setError(res);
      return;
    }

    alert('Cadastro realizado com sucesso!');
    navigate('/');
  }

  return (
      <C.Container>
        <img src="public\logo.jpg" alt="Logo" style={{height:"100px", width: "200px"}} />
        <C.Content>
        <C.Label>REGISTRE-SE</C.Label>
          <Input 
            type="text"
            placeholder="Digite seu número de Matrícula"
            value={register}
            onChange={(e) => [setRegister(e.target.value), setError('')]}
          />
          <Input 
            type="text"
            placeholder="Confirme seu número de Matrícula"
            value={confirmRegister}
            onChange={(e) => [setConfirmRegister(e.target.value), setError('')]}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
          <C.Error>{error}</C.Error>
          <Buttons Text="Entrar" onClick={handleRegister} />
          <C.SignUp>
            Não tem uma conta? <C.Strong><Link to="/signup">&nbsp;Registre-se</Link></C.Strong>
          </C.SignUp>
        </C.Content>
      </C.Container>
  )
}

export default Register;
