import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const BotaoNavegacao = ({ proxima, anterior, finalizar, perguntaAtual, totalPerguntas, exibirDadosMassa, goToPergunta, dadosPesagem }) => {
  // Estado para armazenar as barras de navegação
  const [barras, setBarras] = useState([]);
  
  // Verifica se estamos na última pergunta
  const estaNaUltimaPergunta = perguntaAtual === totalPerguntas - 1;

  useEffect(() => {
    // Função para atualizar as barras de navegação
    const atualizarBarras = () => {
      // Função para obter a cor das barras de acordo com a pergunta
      const getCorBarras = (index) => {
        if (index < perguntaAtual) { return exibirDadosMassa ? '#6B2701' : '#092651'; } 
        else if (index === perguntaAtual) { return exibirDadosMassa ? '#6B2701' : '#092651'; } 
        else { return 'white'; }
      };

      const novasBarras = [];
      for (let i = 1; i < totalPerguntas; i++) { // Começa em 1 para evitar a primeira barra
        if (i !== dadosPesagem.length) { // Não renderiza a quinta barra
          novasBarras.push(
            <button 
              key={i} 
              onClick={() => goToPergunta(i)} 
              style={{ background: getCorBarras(i) }} 
              className="barra"
            />
          );
        }
      }      

      setBarras(novasBarras);
    }

    atualizarBarras();
  }, [perguntaAtual, totalPerguntas, exibirDadosMassa, goToPergunta]);

  return (
    <div className='footer'>
      <div className='botoes'>
        <button className='botao' onClick={anterior}>← Anterior</button>
        {estaNaUltimaPergunta ? (
          <button className='botao' onClick={finalizar}>Finalizar →</button>
        ) : (
          <button className='botao' onClick={proxima}>Próxima →</button>
        )}
      </div>
      <div className="barras-container">
        {barras}
      </div>
    </div>
  );
}

// Definindo PropTypes para garantir os tipos corretos das props
BotaoNavegacao.propTypes = {
  proxima: PropTypes.func.isRequired,
  anterior: PropTypes.func.isRequired,
  finalizar: PropTypes.func.isRequired,
  perguntaAtual: PropTypes.number.isRequired,
  totalPerguntas: PropTypes.number.isRequired,
  exibirDadosMassa: PropTypes.bool.isRequired,
  goToPergunta: PropTypes.func.isRequired,
  dadosPesagem: PropTypes.array.isRequired,
};

export default BotaoNavegacao;
