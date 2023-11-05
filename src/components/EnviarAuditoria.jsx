import { useEffect } from 'react';
import PropTypes from 'prop-types';

const EnviarAuditoria = ({ handleVoltarAoFormulario, respostas }) => {

    useEffect(() => {
        document.body.style.background = '#B3CDBD'
    }, []);

    const handleEnviarAuditoria = () => {
        console.log('Respostas Enviadas:', respostas);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ background: '#CCE4D6', padding: '20px' }}>
                Ufa, chegamos ao fim
            </h1>
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
