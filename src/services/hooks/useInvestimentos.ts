import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { useQuery, UseQueryOptions } from "react-query";
import { Iinvestimentos } from "../../components/Investimentos";

import { api } from "../api";


interface GetInvestimentosResponseProps {
   investments: Iinvestimentos[];
   totalCount: number;
}

export async function getInvestimentos(
   page: number,
   ctx: GetServerSidePropsContext = undefined
): Promise<GetInvestimentosResponseProps> {
   const cookies = parseCookies(ctx);

   const { data, headers } = await api.get("/investments", {
      params: {
         page
      },
      headers: {
         Authorization: `Bearer ${cookies["@bridge.token"]}`
      }
   });


   const investments: Iinvestimentos[] = data.investments.map((investimentos: Iinvestimentos) => {
      console.log("hooks:" + investimentos.name);
      return {
         id: investimentos.id,
         name: investimentos.name,
         nameComplete: investimentos.nameComplete,
         descricacao: investimentos.descricacao,
         captado: investimentos.captado,
         reservado: investimentos.reservado,
         objetivo: investimentos.objetivo,
         alvo_minimo: investimentos.alvo_minimo,
         alvo_maximo: investimentos.alvo_maximo,
         valor_minimo: investimentos.valor_minimo,
         rentabilidade_alvo: investimentos.rentabilidade_alvo,
         pagamentos_projetados: investimentos.pagamentos_projetados,
         modalidade: investimentos.modalidade,
         participacao: investimentos.participacao,
         oportunidade: investimentos.oportunidade,
         setor: investimentos.setor,
      };
   });

   const totalCount = Number(headers["x-total-count"]);

   return {
      investments,
      totalCount
   };
}

export function useInvestimentos(
   page: number,
   options?: UseQueryOptions<GetInvestimentosResponseProps>
) {
   return useQuery(["investimentos", page], () => getInvestimentos(page), {
      staleTime: 1000 * 60 * 10, // 10 minutes
      ...options
   });
}
