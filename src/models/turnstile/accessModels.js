import { connection } from '../../config/turnstileDatabase.js';

async function getAccessesByDate(date) {


  const query = `
    SELECT 
      b.COD_PESSOA,
      i.Descricao,
      b.DataHora,
      f.nome,
      e.descricao,
      e.cnpj
    FROM ((((bilhetes b 
    INNER JOIN Pessoas p ON p.COD_PESSOA = b.COD_PESSOA)
    INNER JOIN Funcionarios f ON f.COD_PESSOA = p.COD_PESSOA)
    INNER JOIN [Departamentos] d ON d.COD_DEPARTAMENTO = f.COD_DEPARTAMENTO)
    INNER JOIN [Empresas] e ON e.COD_EMPRESA = d.COD_EMPRESA)
    INNER JOIN [Inners] i ON i.[Numero] = b.NumInner
    WHERE b.DataHora >= #${date} 00:00:00# 
    and b.DataHora <= #${date} 23:59:59# 
  `;

  try {
    const dados = await connection.query(query);
    return dados;
  } catch (error) {
    console.error('Erro na consulta buscarBilhetesPorDiaEMes:', error);
    throw error;
  }
}
const getClientsByServices = (arrayClients, startDate, endDate) => {
  const formattedClients = arrayClients.map(cnpj => `'${cnpj}'`).join(', ');

  const query = `
    SELECT 
      b.COD_PESSOA,
      i.Descricao,
      b.DataHora,
      f.nome,
      e.descricao as empresa,
      e.cnpj
    FROM (((bilhetes b 
    INNER JOIN Funcionarios f ON f.COD_PESSOA = b.COD_PESSOA)
    INNER JOIN [Departamentos] d ON d.COD_DEPARTAMENTO = f.COD_DEPARTAMENTO)
    INNER JOIN [Empresas] e ON e.COD_EMPRESA = d.COD_EMPRESA)
    INNER JOIN [Inners] i ON i.[Numero] = b.NumInner
    WHERE b.DataHora >= #${startDate} 00:00:00# and b.DataHora <= #${endDate} 23:59:59# and e.cnpj in (${formattedClients})
  `
  return connection.query(query)
}


export default {
  getAccessesByDate,
  getClientsByServices
}