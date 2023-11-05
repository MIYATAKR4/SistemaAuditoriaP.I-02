const dadosMassa = [   
    [],
    [
      // Pergunta 5
      { label: '01 - Tempo de mistura conforme POP?', campo: 'misturaPop', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Tipo de Massa', campo: 'tipoMassa_05', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_05', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_05', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '05 - Banbury 01' }
    ],
    [
      // Pergunta 6
      { label: '01 - Tempo de mistura conforme OP?', campo: 'misturaOp', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Tipo de Massa', campo: 'tipoMassa_06', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_06', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_06', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '06 - Banbury 02 (0 a 5)' }
    ],
    [
      // Pergunta 7
      { label: '01 - Tempo de mistura conforme OP?', campo: 'misturaOp_02', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Temperatura 95°C +- 5°C', campo: 'temperatura', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_07', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_07', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '07 - Cilindro 01 (0 a 5)' }
    ],
    [
      // Pergunta 8
      { label: '01 - Tempo de mistura conforme POP?', campo: 'misturaPop_02', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Temperatura 95°C +- 5°C', campo: 'temperatura_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_08', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_08', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '08 - Cilindro 02 (0 a 5)' }
    ],
    [
      // Pergunta 9
      { label: '01 - Tempo de mistura conforme POP?', campo: 'misturaPop_03', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Temperatura 95°C +- 5°C', campo: 'temperatura_03', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_09', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_09', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '09 - Cilindro 03' }
    ],
    [
      // Pergunta 10
      { label: '01 - Tempo de mistura conforme POP?', campo: 'misturaPop_04', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Temperatura 95°C +- 5°C', campo: 'temperatura_04', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_10', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_10', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '10 - Cilindro 04 (0 a 5)' }
    ],
    [
      // Pergunta 11
      { label: '01 - Estão sendo realizadas as reometrias?', campo: 'reometrias', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Estão todas aprovadas?', campo: 'aprovadas', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_11', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_11', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '11 - Reometria (0 a 5)' }
    ],
    [
      // Pergunta 12
      { label: '01 - Temperatura do Canhão', campo: 'temperaturaCanhao', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '02 - Temperatura do Coxo', campo: 'temperaturaCoxo', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Espessura da Alma', campo: 'espessuraAlma', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '04 - Diâmetro interno da Alma', campo: 'diametroInternoAlma', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '05 - Tipo de Massa', campo: 'tipoMassa_07', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '06 - Limpeza da Matriz', campo: 'limpezaMatriz', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '07 - Limpeza e Organização 5S', campo: 'limpeza5S_12', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '08 - Observações', campo: 'observacoes_12', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '12 - Extrusora de Alma 01' }
    ],
    [
      // Pergunta 13
      { label: '01 - Temperatura do Canhão', campo: 'temperaturaCanhao_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '02 - Temperatura do Coxo', campo: 'temperaturaCoxo_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Espessura da Alma', campo: 'espessuraAlma_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '04 - Diâmetro interno da Alma', campo: 'diametroInternoAlma_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '05 - Tipo de Massa', campo: 'tipoMassa_08', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '06 - Limpeza da Matriz', campo: 'limpezaMatriz_02', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '07 - Limpeza e Organização 5S', campo: 'limpeza5S_13', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '08 - Observações', campo: 'observacoes_13', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '13 - Extrusora de Alma 02' }
    ],
    [
      // Pergunta 14
      { label: '01 - Temperatura do Canhão', campo: 'temperaturaCanhao_03', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '02 - Temperatura do Coxo', campo: 'temperaturaCoxo_03', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Espessura da Alma', campo: 'espessuraAlma_03', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '04 - Diâmetro interno da Alma', campo: 'diametroInternoAlma_03', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '05 - Tipo de Massa', campo: 'tipoMassa_09', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '06 - Limpeza da Matriz', campo: 'limpezaMatriz_03', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '07 - Limpeza e Organização 5S', campo: 'limpeza5S_14', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '08 - Observações', campo: 'observacoes_14', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '14 - Extrusora de Alma 03' }
    ],
    [
      // Pergunta 15
      { label: '01 - A tensão da trama está conforme?', campo: 'tensaoTrama', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Estão todas aprovadas?', campo: 'aprovadas_02', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_15', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_15', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '15 - Trançadeira 01' }
    ],
    [
      // Pergunta 16
      { label: '01 - A tensão da trama está conforme?', campo: 'tensaoTrama_02', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Estão todas aprovadas?', campo: 'aprovadas_03', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_16', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_16', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '16 - Trançadeira 02' }
    ],
    [
      // Pergunta 17
      { label: '01 - A tensão da trama está conforme?', campo: 'tensaoTrama_03', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Estão todas aprovadas?', campo: 'aprovadas_04', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_17', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_17', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '17 - Trançadeira 03' }
    ],
    [
      // Pergunta 18
      { label: '01 - A tensão da trama está conforme?', campo: 'tensaoTrama_04', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '02 - Estão todas aprovadas?', campo: 'aprovadas_05', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '03 - Limpeza e Organização 5S', campo: 'limpeza5S_18', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '04 - Observações', campo: 'observacoes_18', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '18 - Trançadeira 04' }
    ],
    [
      // Pergunta 19
      { label: '01 - Temperatura do Canhão', campo: 'temperaturaCanhao_04', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '02 - Temperatura do Túnel', campo: 'temperaturaTunel', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Temperatura do Coxo', campo: 'temperaturaCoxo_04', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '04 - Espessura', campo: 'espessura', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '05 - Diâmetro interno', campo: 'diametroInterno', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '06 - Tipo de Massa', campo: 'tipoMassa_10', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '07 - Limpeza da Matriz', campo: 'limpezaMatriz_04', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '08 - Limpeza e Organização 5S', campo: 'limpeza5S_19', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '09 - Observações', campo: 'observacoes_19', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '19 - Extrusora de Capa 01' }
    ],
    [
      // Pergunta 20
      { label: '01 - Temperatura do Canhão', campo: 'temperaturaCanhao_05', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '02 - Temperatura do Túnel', campo: 'temperaturaTunel_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '03 - Temperatura do Coxo', campo: 'temperaturaCoxo_05', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '04 - Espessura', campo: 'espessura_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '05 - Diâmetro interno', campo: 'diametroInterno_02', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '06 - Tipo de Massa', campo: 'tipoMassa_11', tipo: 'text', placeholder: 'Digite um valor' },
      { label: '07 - Limpeza da Matriz', campo: 'limpezaMatriz_05', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '08 - Limpeza e Organização 5S', campo: 'limpeza5S_20', tipo: 'radio', opcoes: ['0', '1', '2', '3', '4', '5'] },
      { label: '09 - Observações', campo: 'observacoes_20', tipo: 'text', placeholder: 'Digite um valor' },
      { titulo: '20 - Extrusora de Capa 02' }
    ],
  ];
  
  export default dadosMassa;
  