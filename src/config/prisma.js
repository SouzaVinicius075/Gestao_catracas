import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { configDotenv } from 'dotenv';

// Garante que as variáveis do .env foram carregadas
configDotenv();

// No ESM, o 'pg' exporta o Pool de uma forma específica
const { Pool } = pg;

// Pega a URL do seu banco (veja se no seu .env está como DB_URL ou DATABASE_URL)
const connectionString = process.env.DB_URL;

// Cria a piscina de conexões nativa do Postgres
const pool = new Pool({ connectionString });

// Cria o adaptador do Prisma
const adapter = new PrismaPg(pool);

// Inicia o Prisma usando o adaptador
const prisma = new PrismaClient({ adapter });

export default prisma;

// import { PrismaClient } from '@prisma/client';
// // import { PrismaClient } from '@prisma/client/extension';

// let prisma;

// // Verifica se já existe uma instância global no ambiente de desenvolvimento
// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient();
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// }

// export default prisma;