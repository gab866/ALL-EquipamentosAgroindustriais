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
      {
        diameter: "150mm",
        image: "/amortecedor-150.jpeg",
        additionalImages: [
          "/amortecedor-150-2.jpeg",
          "/amortecedor-150-3.jpeg",
          "/amortecedor-150-4.jpeg",
        ],
      },
      {
        diameter: "200mm",
        image: "/amortecedor-200.jpeg",
        additionalImages: [
          "/amortecedor-200-2.jpeg",
          "/amortecedor-200-3.jpeg",
          "/amortecedor-200-4.jpeg",
        ],
      },
      {
        diameter: "240mm",
        image: "/amortecedor-240.jpeg",
        additionalImages: [
          "/amortecedor-240-2.jpeg",
          "/amortecedor-240-3.jpeg",
          "/amortecedor-240-4.jpeg",
        ],
      },
      {
        diameter: "320mm",
        image: "/amortecedor-320.jpeg",
        additionalImages: [
          "/amortecedor-320-2.jpeg",
          "/amortecedor-320-4.jpeg",
          "/amortecedor-320-3.jpeg",
        ],
      },
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
      {
        diameter: "150mm",
        image: "/bifurcada-150.jpeg",
        additionalImages: [
          "/bifurcada-150-2.jpeg",
          "/bifurcada-150-3.jpeg",
          "/bifurcada-150-4.jpeg",
        ],
      },
      {
        diameter: "200mm",
        image: "/bifurcada-200.jpeg",
        additionalImages: [
          "/bifurcada-200-2.jpeg",
          "/bifurcada-200-3.jpeg",
          "/bifurcada-200-4.jpeg",
        ],
      },
      {
        diameter: "240mm",
        image: "/bifurcada-240.jpeg",
        additionalImages: [
          "/bifurcada-240-2.jpeg",
          "/bifurcada-240-3.jpeg",
          "/bifurcada-240-4.jpeg",
        ],
      },
      {
        diameter: "320mm",
        image: "/bifurcada-320.jpeg",
        additionalImages: [
          "/bifurcada-320-2.jpeg",
          "/bifurcada-320-3.jpeg",
          "/bifurcada-320-4.jpeg",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Bifurcada 90°",
    image: "/bifurcada90-240.jpeg",
    description:
      "Bifurcada de 90 graus em ferro fundido para divisão de fluxo em duas direções.",
    specifications: {
      Material: "Ferro fundido",
      Ângulo: "90 graus",
      Saídas: "2 direções",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      {
        diameter: "150mm",
        image: "/bifurcada90-150.jpeg",
        additionalImages: [
          "/bifurcada90-150-2.jpeg",
          "/bifurcada90-150-3.jpeg",
          "/bifurcada90-150-4.jpeg",
        ],
      },
      {
        diameter: "200mm",
        image: "/bifurcada90-200.jpeg",
        additionalImages: [
          "/bifurcada90-200-2.jpeg",
          "/bifurcada90-200-3.jpeg",
          "/bifurcada90-200-4.jpeg",
        ],
      },
      {
        diameter: "240mm",
        image: "/bifurcada90-240.jpeg",
        additionalImages: [
          "/bifurcada90-240-2.jpeg",
          "/bifurcada90-240-3.jpeg",
          "/bifurcada90-240-4.jpeg",
        ],
      },
      {
        diameter: "320mm",
        image: "/bifurcada90-320.jpeg",
        additionalImages: [
          "/bifurcada90-320-2.jpeg",
          "/bifurcada90-320-3.jpeg",
          "/bifurcada90-320-4.jpeg",
        ],
      },
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
      {
        diameter: "200mm",
        image: "/trifurcada-200.jpeg",
        additionalImages: [
          "/trifurcada-200-2.jpeg",
          "/trifurcada-200-3.jpeg",
        ],
      },
      {
        diameter: "240mm",
        image: "/trifurcada-240.jpeg",
        additionalImages: [
          "/trifurcada-240-2.jpeg",
          "/trifurcada-240-3.jpeg",
        ],
      },
      {
        diameter: "320mm",
        image: "/trifurcada-320.jpeg",
        additionalImages: [
          "/trifurcada-320-2.jpeg",
          "/trifurcada-320-3.jpeg",
        ],
      },
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
  {
    id: 14,
    name: "Mancal de peneira",
    image: "/mancaldepeneira.jpeg",
    description:
      "Mancal de peneira em ferro fundido para suporte e movimentação de peneiras industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Suporte e movimentação",
      Aplicação: "Peneiras industriais",
    },
  },
  {
    id: 15,
    name: "Excêntrico peneira",
    image: "/excentricopeneira.jpeg",
    description:
      "Excêntrico de peneira em ferro fundido para movimentação vibratória de peneiras industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Movimentação vibratória",
      Aplicação: "Peneiras industriais",
    },
  },
  {
    id: 16,
    name: "Esferas de borracha",
    image: "/esferasdeborracha.jpeg",
    description:
      "Esferas de borracha para limpeza e desobstrução de peneiras industriais.",
    specifications: {
      Material: "Borracha",
      Função: "Limpeza e desobstrução",
      Aplicação: "Peneiras industriais",
    },
  },
  {
    id: 17,
    name: "Helicóide",
    image: "/helicoide-300x076x300.jpeg",
    description:
      "Helicóide em ferro fundido para transporte de materiais em sistemas industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Transporte de materiais",
      Aplicação: "Sistemas industriais",
    },
    sizes: [
      { diameter: "Ø 300 x 076 x 300", image: "/helicoide-300x076x300.jpeg" },
      { diameter: "Ø 300 x 60 x 300", image: "/helicoide-300x60x300.jpeg" },
      { diameter: "Ø 250 x 60 x 250", image: "/helicoide-250x60x250.jpeg" },
    ],
  },
  {
    id: 18,
    name: "Caneca plástica",
    image: "/canecaplastica.jpeg",
    description:
      "Caneca plástica resistente para uso industrial e laboratorial.",
    specifications: {
      Material: "Plástico",
      Função: "Medição e transporte",
      Aplicação: "Uso industrial",
    },
  },
  {
    id: 19,
    name: "Luva união tubo",
    image: "/luvauniaotubo-240.jpeg",
    description:
      "Luva união em ferro fundido para conexão de tubulações industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Conexão de tubos",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [{ diameter: "240mm", image: "/luvauniaotubo-240.jpeg" }],
  },
  {
    id: 20,
    name: "Amortecedor Autolimpante",
    image: "/amortecedorautolimpante-240.jpeg",
    description:
      "Amortecedor autolimpante em ferro fundido com sistema de limpeza automática para redução de vibrações.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Redução de vibrações e autolimpeza",
      Aplicação: "Sistemas de tubulação",
    },
    sizes: [
      {
        diameter: "240mm",
        image: "/amortecedorautolimpante-240.jpeg",
        additionalImages: [
          "/amortecedorautolimpante-240-2.jpeg",
          "/amortecedorautolimpante-240-3.jpeg",
          "/amortecedorautolimpante-240-4.jpeg",
        ],
      },
      {
        diameter: "320mm",
        image: "/amortecedorautolimpante-320.jpeg",
        additionalImages: [
          "/amortecedorautolimpante-320-2.jpeg",
          "/amortecedorautolimpante-320-3.jpeg",
          "/amortecedorautolimpante-320-4.jpeg",
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Grelhas",
    image: "/grelhas.jpeg",
    description:
      "Grelhas em ferro fundido para filtragem e separação de materiais em sistemas industriais.",
    specifications: {
      Material: "Ferro fundido",
      Função: "Filtragem e separação",
      Aplicação: "Sistemas industriais",
    },
  },
  {
    id: 22,
    name: "Peneiras",
    image: "/peneiras.jpeg",
    description:
      "Peneiras industriais para separação e classificação de materiais granulados.",
    specifications: {
      Material: "Aço inoxidável",
      Função: "Separação e classificação",
      Aplicação: "Processamento industrial",
    },
    sizes: [
      {
        diameter: "Padrão",
        image: "/peneiras.jpeg",
        additionalImages: [
          "/peneiras-2.jpeg",
        ],
      },
    ],
  },
  {
    id: 23,
    name: "Suporte para cabo de tubulação",
    image: "/suportecabotubulacao.jpeg",
    description:
      "Suporte em aço galvanizado para fixação e sustentação de cabos de tubulação industrial.",
    specifications: {
      Material: "Aço galvanizado",
      Função: "Fixação e sustentação",
      Aplicação: "Sistemas de tubulação",
    },
  },
];
