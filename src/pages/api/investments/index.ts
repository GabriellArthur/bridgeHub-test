import { NextApiRequest, NextApiResponse } from "next";

import { Auth } from "../../../middlewares/Auth";

import prisma from "../../../lib/prisma";

async function investments(req: NextApiRequest, res: NextApiResponse) {
   try {
      switch (req.method) {
         default:
            break;

         case "GET": {
            const { page = 1, per_page = 5 } = req.query;

            const investments = await prisma.investment.findMany({
               select: {
                  id: true,
                  name: true,
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
               },
               skip: (Number(page) - 1) * 5,
               take: Number(per_page)
            });

            const totalCount = await prisma.investment.count();

            res.setHeader("x-total-count", totalCount);

            return res.json({ investments });
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

export default Auth(investments);
