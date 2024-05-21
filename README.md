# Catálogo de Produtos com Next.js

## Objetivo

Este projeto visa avaliar a capacidade de desenvolver uma aplicação frontend utilizando Next.js, focando em conceitos básicos como roteamento, estilização e consumo de API.

## Descrição do Projeto

Este é um catálogo de produtos simples onde os usuários podem visualizar uma lista de produtos e detalhes de um produto individual.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Fake Store API](https://fakestoreapi.com/)

## Funcionalidades

- **Página Inicial (/)**: Lista todos os produtos com a possibilidade de pesquisa por nome.
- **Página de Produto (/product/[id])**: Exibe detalhes de um produto individual.
- **Roteamento Dinâmico**: Implementação de rotas dinâmicas para acessar os detalhes dos produtos.
- **Consumo de API**: Consumo de API pública para obter a lista de produtos e os detalhes de cada produto.
- **Estilização Responsiva**: Utilização de Tailwind CSS para um layout responsivo e moderno.

## Configuração e Execução

Siga as instruções abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Brandon-Magalhaes/Product-Catalog.git
   cd Product-Catalog
   ```

## Instale as dependências

npm install

# ou

yarn install

## Execute o servidor de desenvolvimento

npm run dev

# ou

yarn dev

## Abra o navegador

http://localhost:3000 para ver o resultado.

## API

Utiliza a Fake Store API para obter dados de produtos.

## Endpoints Utilizados

    GET /products - Lista todos os produtos
    GET /products/{id} - Detalhes de um produto específico

# Componentes

## Header

Barra de navegação com links para Login e Register.

## Home

Página inicial que lista os produtos e permite a busca por nome.

## Product

Página de detalhes de um produto.

## Estilização

Utiliza Tailwind CSS para estilização dos componentes e layout responsivo.
Autor

    Brandon Magalhães

## Licença

Este projeto está licenciado sob a licença MIT.
