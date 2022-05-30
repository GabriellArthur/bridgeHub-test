-- CreateTable
CREATE TABLE "Investment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nameComplete" TEXT NOT NULL,
    "descricacao" TEXT NOT NULL,
    "captado" INTEGER NOT NULL,
    "reservado" INTEGER NOT NULL,
    "objetivo" INTEGER NOT NULL,
    "alvo_minimo" INTEGER NOT NULL,
    "alvo_maximo" INTEGER NOT NULL,
    "valor_minimo" INTEGER NOT NULL,
    "rentabilidade_alvo" TEXT NOT NULL,
    "pagamentos_projetados" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "participacao" INTEGER NOT NULL,
    "oportunidade" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
