import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";

import { Auth } from "../../../middlewares/Auth";
import prisma from "../../../lib/prisma";

async function investmentById(req: NextApiRequest, res: NextApiResponse) {
   try {
      const { id } = req.query;

      switch (req.method) {
         default:
            break;

         case "GET": {
            const investment = await prisma.investment.findFirst({
               where: {
                  id: Number(id)
               },
               select: {
                  id: true,
                  name: true,
                  nameComplete: true,
                  descricacao: true,
                  captado: true,
                  reservado: true,
                  objetivo: true,
                  alvo_minimo: true,
                  alvo_maximo: true,
                  valor_minimo: true,
                  rentabilidade_alvo: true,
                  pagamentos_projetados: true,
                  modalidade: true,
                  participacao: true,
                  oportunidade: true,
                  setor: true,
               }
            });

            if (!investment) {
               return res.json({
                  error: true,
                  message: "Investimento não encontrado."
               });
            }

            return res.json(investment);
         }

      }
   } catch (error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
         error: true,
         message: "Erro interno do servidor"
      });
   } finally {
      prisma.$disconnect();
   }
}

export default Auth(investmentById);
