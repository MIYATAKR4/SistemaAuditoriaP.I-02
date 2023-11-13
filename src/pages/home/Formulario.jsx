import { useState } from 'react';

import Pergunta from '../../components/Pergunta';
import BotaoNavegacao from '../../components/BotaoNavegacao';
import PaginaSetor from '../../components/PaginaSetor';
import EnviarAuditoria from '../../components/EnviarAuditoria';
import dadosPesagem from '../../dados_pesagem';
import dadosMassa from '../../dados_massa';

import '../../styles/Global.css';
import RoutesApp from '../../routes';


// Função para padronizar os dados
const padronizarDados = (dados) => {
  return dados.map((perguntas) => {
    return perguntas.map((pergunta) => {
      return {
        ...pergunta,
      };
    });
  });
};

const Formulario = () => {
  // Estado para a pergunta atual
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  // Estado para as respostas do formulário
  const [respostas, setRespostas] = useState({});

  // Estado para os dados padronizados
  const [dados, setDados] = useState(padronizarDados([...dadosPesagem, ...dadosMassa]));

  // Estado para indicar se o formulário foi finalizado
  const [finalizado, setFinalizado] = useState(false);

  // Função para lidar com a mudança nas respostas do usuário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRespostas({ ...respostas, [name]: value });
  };

  // Função para avançar para a próxima pergunta
  const handleProximaPergunta = () => {
    if (perguntaAtual < dados.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setFinalizado(true);
    }
  };

  // Função para voltar para a pergunta anterior
  const handlePerguntaAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(perguntaAtual - 1);
    }
  };

  // Função para voltar ao formulário após finalizar
  const handleVoltarAoFormulario = () => {
    setFinalizado(false);
  };

  // Função para navegar para uma pergunta específica
  const goToPergunta = (index) => {
    setPerguntaAtual(index);
  };

  // Obter os dados da pergunta atual
  const perguntaAtualData = dados[perguntaAtual];

  // Verificar se estamos exibindo os dados de massa
  const exibirDadosMassa = perguntaAtual >= dadosPesagem.length;

  // Renderização condicional com base na pergunta atual
  if (perguntaAtual === 0 || perguntaAtual === dadosPesagem.length) {
    return (
      <PaginaSetor
        setor={perguntaAtual === 0 ? 'pesagem' : 'massa'}
        proxima={handleProximaPergunta}
        anterior={handlePerguntaAnterior}
        exibirDadosMassa={exibirDadosMassa}
      />
    );
  }

  if (finalizado) {
    return <EnviarAuditoria handleVoltarAoFormulario={handleVoltarAoFormulario} respostas={respostas} />;
  }

  // Renderização das perguntas e botões de navegação
  return (
    <div>
      <h2 className="titulo_pergunta">{perguntaAtualData.map((pergunta) => pergunta.titulo)}</h2>
      <div>
        {perguntaAtualData.slice(0, -1).map((pergunta) => (
          <Pergunta
            key={pergunta.campo}
            pergunta={pergunta}
            respostas={respostas}
            handleInputChange={handleInputChange}
            exibirDadosMassa={exibirDadosMassa}
          />
        ))}
      </div>

      <BotaoNavegacao
        finalizar={handleProximaPergunta}
        proxima={handleProximaPergunta}
        anterior={handlePerguntaAnterior}
        perguntaAtual={perguntaAtual}
        totalPerguntas={dados.length}
        exibirDadosMassa={exibirDadosMassa}
        goToPergunta={goToPergunta}
        dadosPesagem={dadosPesagem}
      />
    </div>
  );
};

export default Formulario;