export interface Iinvestimentos {
   id: number;
   name: string;
   nameComplete: string;
   descricacao: string;
   captado: number;
   reservado: number;
   objetivo: number;

   alvo_minimo: number;
   alvo_maximo: number;
   valor_minimo: number;

   rentabilidade_alvo: string;
   pagamentos_projetados: string;
   modalidade: string;
   participação: number;

   oportunidade: string;
   setor: string;
}

export const investimentos = [
   {
      'id': 0,
      'name': 'Bose',
      'nameComplete': 'Bares e Restaurantes',
      'descricacao': 'Amarca Bose é gastrobar do grupo BOSE&CO,sendo uma referência...',
      'captado': 2,
      'reservado': 0,
      'objetivo': 5,
      'alvo_minimo': 2500000,
      'alvo_maximo': 5000000,
      'valor_minimo': 1,
      'rentabilidade_alvo': '31.91',
      'pagamentos_projetados': 'Ao final',
      'modalidade': 'Equity',
      'participação': 0.1,
      'oportunidade': 'Expansão de operação',
      'setor': 'Bares e Restaurantes',
   },
   {
      'id': 1,
      'name': 'Bose',
      'nameComplete': 'Bares e Restaurantes',
      'descricacao': 'Amarca Bose é gastrobar do grupo BOSE&CO,sendo uma referência...',
      'captado': 2,
      'reservado': 0,
      'objetivo': 5,
      'alvo_minimo': 2500000,
      'alvo_maximo': 5000000,
      'valor_minimo': 1,
      'rentabilidade_alvo': '31.91',
      'pagamentos_projetados': 'Ao final',
      'modalidade': 'Equity',
      'participação': 0.1,
      'oportunidade': 'Expansão de operação',
      'setor': 'Bares e Restaurantes',
   },
];