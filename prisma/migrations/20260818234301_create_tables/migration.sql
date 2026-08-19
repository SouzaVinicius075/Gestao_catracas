/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_id_acesso_fkey";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "id_acesso" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicos" (
    "id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresas" (
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "Centros_custo" (
    "id" SERIAL NOT NULL,
    "id_matriz" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Centros_custo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comandas" (
    "id" SERIAL NOT NULL,
    "id_centro_custo" INTEGER NOT NULL,
    "id_servico" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comandas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_id_acesso_fkey" FOREIGN KEY ("id_acesso") REFERENCES "Acessos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Centros_custo" ADD CONSTRAINT "Centros_custo_id_matriz_fkey" FOREIGN KEY ("id_matriz") REFERENCES "Empresas"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
