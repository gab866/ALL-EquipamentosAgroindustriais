export const products = [
  {
    id: 1,
    name: "Arruela côncava M 10",
    image: "/arruelaconcava.jpeg",
    description:
      "Arruela côncava M 10 em aço galvanizado para fixação e vedação.",
    specifications: {
      Rosca: "M 10",
      Material: "Aço galvanizado",
      Tipo: "Côncava",
      Aplicação: "Fixação e vedação",
    },
  },
  {
    id: 2,
    name: "Anel",
    image: "/anel-200.jpeg",
    description:
      "Anel em ferro fundido para vedação e fixação em sistemas de tubulação industrial.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Vedação e fixação",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "200mm", image: "/anel-200.jpeg" },
      { diameter: "240mm", image: "/anel-240.jpeg" },
      { diameter: "320mm", image: "/anel-320.jpeg" },
      { diameter: "380mm", image: "/anel-380.jpeg" },
    ],
  },
  {
    id: 3,
    name: "Amortecedor final",
    image: "/amortecedor-150.jpeg",
    description:
      "Amortecedor de linha em ferro fundido para redução de vibrações e ruídos em sistemas de tubulação.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Redução de vibrações",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "150mm", image: "/amortecedor-150.jpeg" },
      { diameter: "200mm", image: "/amortecedor-200.jpeg" },
      { diameter: "240mm", image: "/amortecedor-240.jpeg" },
      { diameter: "320mm", image: "/amortecedor-320.jpeg" },
    ],
  },
  {
    id: 4,
    name: "Abraçadeira",
    image: "/abracadeira-200.jpeg",
    description:
      "Abraçadeira em aço galvanizado para fixação e suporte de tubulações industriais.",
    specifications: {
      Material: "Aço galvanizado",
      Função: "Fixação e suporte",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "200mm", image: "/abracadeira-200.jpeg" },
      { diameter: "240mm", image: "/abracadeira-240.jpeg" },
      { diameter: "320mm", image: "/abracadeira-320.jpeg" },
      { diameter: "380mm", image: "/abracadeira-380.jpeg" },
    ],
  },
  {
    id: 5,
    name: "Cone",
    image: "/cone1.jpeg",
    description:
      "Cone em ferro fundido para redução de diâmetro em sistemas de tubulação industrial.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Redução de diâmetro",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "200mm/150mm", image: "/cone1.jpeg" },
      { diameter: "320mm/240mm", image: "/cone2.jpeg" },
    ],
  },
  {
    id: 6,
    name: "Curva 30°",
    image: "/curva30-150.jpeg",
    description:
      "Curva de 30 graus em ferro fundido para mudança de direção em sistemas de tubulação industrial.",
    specifications: {
      Material: "Ferro fundido",
      Ângulo: "30 graus",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "150mm", image: "/curva30-150.jpeg" },
      { diameter: "200mm", image: "/curva30-200.jpeg" },
      { diameter: "240mm", image: "/curva30-240.jpeg" },
      { diameter: "320mm", image: "/curva30-320.jpeg" },
      { diameter: "380mm", image: "/curva30-380.jpeg" },
    ],
  },
  {
    id: 7,
    name: "Bifurcada 45°",
    image: "/bifurcada-150.jpeg",
    description:
      "Bifurcada de 45 graus em ferro fundido para divisão de fluxo em duas direções.",
    specifications: {
      Material: "Ferro fundido",
      Ângulo: "45 graus",
      Saídas: "2 direções",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "150mm", image: "/bifurcada-150.jpeg" },
      { diameter: "200mm", image: "/bifurcada-200.jpeg" },
      { diameter: "240mm", image: "/bifurcada-240.jpeg" },
      { diameter: "320mm", image: "/bifurcada-320.jpeg" },
    ],
  },
  {
    id: 8,
    name: "Bifurcada 50°",
    image: "/bifurcada50-240.jpeg",
    description:
      "Bifurcada de 50 graus em ferro fundido para divisão de fluxo em duas direções.",
    specifications: {
      Material: "Ferro fundido",
      Ângulo: "50 graus",
      Saídas: "2 direções",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "240mm", image: "/bifurcada50-240.jpeg" },
      { diameter: "320mm", image: "/bifurcada50-320.jpeg" },
    ],
  },
  {
    id: 9,
    name: "Amortecedor de linha tubular",
    image: "/amortecedordelinha.jpeg",
    description:
      "Amortecedor de linha tubular em ferro fundido para redução de vibrações em sistemas tubulares.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Redução de vibrações",
      Tipo: "Tubular",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [{ diameter: "200mm", image: "/amortecedordelinha.jpeg" }],
  },
  {
    id: 10,
    name: "Entrada dupla Y 90°",
    image: "/entrada-dupla-240.jpeg",
    description:
      "Entrada dupla Y de 90 graus em ferro fundido para junção de duas tubulações.",
    specifications: {
      Material: "Ferro fundido",
      Ângulo: "90 graus",
      Tipo: "Entrada dupla Y",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "240mm", image: "/entrada-dupla-240.jpeg" },
      { diameter: "320mm", image: "/entrada-dupla-320.jpeg" },
    ],
  },
  {
    id: 11,
    name: "Rolete de correia transportadora",
    image: "/roletedecorreia2.jpeg",
    description: "Rolete em aço carbono para aplicações industriais.",
    specifications: {
      Material: "Aço carbono",
      Função: "Suporte e movimentação",
      Aplicação: "Sistemas industriais",
    },
  },
  {
    id: 12,
    name: "Trifurcada",
    image: "/trifurcada-200.jpeg",
    description:
      "Trifurcada em ferro fundido para divisão de fluxo em três direções.",
    specifications: {
      Material: "Ferro fundido",
      Saídas: "3 direções",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      { diameter: "200mm", image: "/trifurcada-200.jpeg" },
      { diameter: "240mm", image: "/trifurcada-240.jpeg" },
      { diameter: "320mm", image: "/trifurcada-320.jpeg" },
    ],
  },
  {
    id: 13,
    name: "Amortecedor de linha",
    image: "/amortecedor.jpeg",
    description:
      "Amortecedor em ferro fundido para redução de vibrações em sistemas industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Redução de vibrações",
      Aplicação: "Sistemas industriais",
    },
  },
];
