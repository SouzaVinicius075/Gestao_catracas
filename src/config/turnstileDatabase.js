import ADODB from 'node-adodb';
import { configDotenv } from 'dotenv';
configDotenv()

import path from 'path';

const mdbPath = path.resolve('C:/Users/Usuário/Documents/Vinicius/TopAcesso.mdb');

const senhaMdb = process.env.MDB_PWD;

const connectionString = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${mdbPath};Jet OLEDB:Database Password=${senhaMdb};`;



// Se a versão 4.0 falhar (ex: sistema de 64 bits), tente o provedor ACE 12.0:

// const connectionString = `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${mdbPath};Jet OLEDB:Database Password=${senhaMdb};`;

export const connection = ADODB.open(connectionString);