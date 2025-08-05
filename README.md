# ALL Equipamentos Agroindustriais

Site institucional da ALL Equipamentos Agroindustriais, desenvolvido com React + Vite.

## 🚀 Tecnologias

- React 19
- Vite
- React Router DOM
- SCSS
- JavaScript ES6+

## 🎨 Design

- **Cores principais**: #173827 (verde escuro) e #AEC4A3 (verde claro)
- **Fundo**: Branco
- **Tipografia**: Arial, limpa e moderna
- **Layout**: Responsivo para desktop e mobile

## 📄 Páginas

1. **Página Inicial**: Boas-vindas e apresentação da empresa
2. **Catálogo**: Lista de produtos em cards
3. **Detalhes do Produto**: Informações completas e especificações
4. **Sobre Nós**: História da empresa e informações de contato

## 🛠️ Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Acesse: http://localhost:5173

## 📦 Build para produção

```bash
npm run build
```

## 🏗️ Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Header.scss
│   ├── ProductCard.jsx
│   └── ProductCard.scss
├── pages/              # Páginas da aplicação
│   ├── Home.jsx
│   ├── Home.scss
│   ├── Catalog.jsx
│   ├── Catalog.scss
│   ├── ProductDetail.jsx
│   ├── ProductDetail.scss
│   ├── About.jsx
│   └── About.scss
├── data/               # Dados mock
│   └── products.js
├── styles/             # Estilos globais
│   ├── variables.scss
│   └── global.scss
└── App.jsx            # Componente principal
```