import { useEffect } from 'react';
import PropTypes from 'prop-types';
import React from 'react'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom'
const EnviarAuditoria = ({ handleVoltarAoFormulario, respostas }) => {
    const { signOut } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
        document.body.style.background = '#B3CDBD'
    }, []);

    const handleEnviarAuditoria = () => {
        console.log('Respostas Enviadas:', respostas);
    };

    return (
        <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#CCE4D6', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ textAlign: 'left' }}>
                        <button className='logout' onClick={() => [signOut(), navigate("/")]}><u>sair</u></button>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center', marginRight:'40px'}}>
                        <h2>Ufa, chegamos ao fim</h2>
                    </div>
                </div>
                <div style={{ padding: '20px' }}>
                    <p style={{ fontWeight: '600', fontSize: '1.25em' }}>Se estiver tudo certo com suas respostas, confirme o seu envio</p>
                    <button 
                        onClick={handleEnviarAuditoria}
                        className='botaoAuditoria'
                        style={{ background: '#467442' }}>
                        Enviar Auditoria
                    </button>
                </div>
                <hr style={{ border: '2px solid #333' }} />
                <div style={{ padding: '20px' }}>
                    <p style={{ fontWeight: '600', fontSize: '1.25em' }}>Se deseja voltar ao formulário, é só selecionar a opção abaixo</p>
                    <button 
                        onClick={handleVoltarAoFormulario}
                        className='botaoAuditoria'
                        style={{ background: '#804242' }}>
                        Voltar ao Formulário
                    </button>
                </div>
        </div>
    )
}

// Definindo PropTypes
EnviarAuditoria.propTypes = {
    handleVoltarAoFormulario: PropTypes.func.isRequired,
    respostas: PropTypes.object.isRequired,
};

export default EnviarAuditoria;
