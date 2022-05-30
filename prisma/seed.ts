import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
   for (let investment = 0; investment < 30; investment++) {
      await prisma.investment.create({
         data: {
            name: `${faker.name.firstName()}`,
            nameComplete: `${faker.name.firstName()} ${faker.name.lastName()}`,
            descricacao: `${faker.name.firstName()} é uma empresa de tal para tal ramo`,
            captado: 2,
            reservado: 0,
            objetivo: 5,
            alvo_minimo: 250000,
            alvo_maximo: 500000,
            valor_minimo: 20,
            rentabilidade_alvo: "0.2% ao ano",
            pagamentos_projetados: "Ao final",
            modalidade: "Equity",
            participacao: 2,
            oportunidade: "Expansão de operação",
            setor: "Empresas multinacionais",
            createdAt: faker.date.recent(35)
         }
      });
   }

   // Create admin user

   await prisma.user.create({
      data: {
         name: "Administrador",
         email: "administrador@bridge.net",
         password: await bcrypt.hash("admin", 8),
         createdAt: new Date()
      }
   });
}

main()
   .catch(() => process.exit(1))
   .finally(() => {
      prisma.$disconnect();
   });
