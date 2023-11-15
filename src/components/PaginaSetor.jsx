import { useEffect } from 'react';
import PropTypes from 'prop-types';
import React from 'react'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const PaginaSetor = ({ setor, proxima, anterior, exibirDadosMassa }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  // UseEffect para atualizar o estilo do corpo da página e altura quando exibirDadosMassa muda
  useEffect(() => {
    // Altera o estilo de fundo com base em exibirDadosMassa
    document.body.style.background = exibirDadosMassa
      ? 'linear-gradient(#D34C00, #6B2701)'
      : 'linear-gradient(#39557E, #092651)'   
    document.body.style.height = '100vh';
  }, [exibirDadosMassa]);

  return (
    <div>
      {setor === 'massa' ? null : 
      <div style={{margin:'20px'}}>
        <button className='botao'  Text= "Sair" onClick={() => [signOut(), navigate("/")]}>
          <u>sair</u>
        </button>
      </div>}
      {/* Renderiza o título com base no setor */}
      <h2 className="titulo_pergunta">{setor === 'pesagem' ? 'Setor de Pesagem' : 'Setor de Massa'}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Renderiza a imagem com base no setor */}
        <img src={setor === 'pesagem' ? '/pesagem.png' : '/massa.png'} alt="" />
      </div>
      <div className='botoes' style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Botões de navegação */}
      {setor === 'pesagem' ? null : <button className='botao' onClick={anterior} style={{marginRight: '20px'}}>← Anterior</button>}
      {setor === 'pesagem' ? (<button className='botao' onClick={proxima}>Iniciar →</button>) 
      : (<button className='botao' onClick={proxima}>Próxima →</button>)}
    </div>
    </div>
  );
};

// Definindo PropTypes para garantir os tipos corretos das props
PaginaSetor.propTypes = {
  setor: PropTypes.string.isRequired,
  proxima: PropTypes.func.isRequired,
  anterior: PropTypes.func.isRequired,
  exibirDadosMassa: PropTypes.bool.isRequired,
};

export default PaginaSetor;
