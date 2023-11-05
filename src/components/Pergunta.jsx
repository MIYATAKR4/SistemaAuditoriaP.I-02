import PropTypes from 'prop-types';

// Definindo o componente funcional 'Pergunta' que recebe algumas props
const Pergunta = ({ pergunta, respostas, handleInputChange, exibirDadosMassa }) => {
  
  // Se não houver uma pergunta, retorna null e não renderiza nada
  if (!pergunta) return null;

  // Destruturação dos atributos da pergunta
  const { label, campo, tipo, opcoes, placeholder } = pergunta;

  // Definindo a classe CSS baseada na prop 'exibirDadosMassa'
  const classeCSS = exibirDadosMassa === false ? 'lista_pesagem' : 'lista_massa';

  // Função para alterar a cor do corpo do documento
  const alterarCorDoCorpo = cor => document.body.style.background = cor;

  // Altera a cor do corpo do documento dependendo do valor de 'exibirDadosMassa'
  if (exibirDadosMassa) { 
    alterarCorDoCorpo('#D34C00') 
  } else { 
    alterarCorDoCorpo('#39557E'); 
  }

  return (
    <>
      {tipo === 'text' && (
        <div className={classeCSS}>
          <div>
            <label htmlFor={campo} style={{ display: 'block', marginBottom: '10px' }}>{label}</label>
            <input 
              type="text" 
              id={campo}  
              name={campo} 
              value={respostas[campo] || ''} 
              onChange={handleInputChange} 
              placeholder={placeholder} 
              style={{ height: '25px' }}
            />          
          </div>
        </div>
      )}

      {tipo === 'radio' && (
        <div className={classeCSS}>
          <label style={{ display: 'block' }}>
            <span style={{ display: 'block' }}>{label}</span>
            {opcoes.map((opcao, index) => (
              <label key={index} className="labelInput">
                {opcao}
                <input 
                  type="radio" 
                  name={campo} 
                  value={opcao} 
                  checked={respostas[campo] === opcao} 
                  onChange={handleInputChange}      
                  style={{ marginLeft: '3px', marginTop: '10px' }}             
                />
              </label>
            ))}
          </label>
        </div>
      )}
    </>
  );
}

// Definindo os tipos das propriedades que o componente espera receber
Pergunta.propTypes = {
  pergunta: PropTypes.object.isRequired,
  respostas: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  exibirDadosMassa: PropTypes.bool.isRequired,
};

// Exportando o componente 'Pergunta' como componente padrão
export default Pergunta;
