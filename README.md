# Pojeto 200dev 


### Guia de Execução do Projeto
Este projeto é construído com Vite e utiliza várias dependências para desenvolvimento frontend moderno, incluindo TypeScript, ESLint, Jest, e Tailwind CSS. Siga as instruções abaixo para configurar e rodar o projeto.

#### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina. Para verificar, execute:

Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina. Para verificar, execute:
```bash
node -v
npm -v
```

#### Instalação

1. Clone o repositório e navegue até o diretório do projeto:
```bash
git clone <URL_DO_REPOSITORIO>
cd dev-200
```
2. Instale as dependências:
```bash
npm install
```


#### Scripts Disponíveis
O projeto contém os seguintes scripts no package.json para facilitar o desenvolvimento e execução:


* npm run dev: Inicia o servidor de desenvolvimento utilizando o Vite.
```bash
npm run dev
```

* npm run build: Compila o projeto para produção, gerando arquivos otimizados no diretório dist
```bash
npm run build
```

* npm run preview: Serve o build de produção localmente para pré-visualização.

```
npm run preview
```


### Documentação de Dependências do Projeto

 Este projeto utiliza várias dependências para facilitar o desenvolvimento e garantir uma aplicação rica em funcionalidades. Abaixo está uma breve descrição de cada biblioteca usada:

#### Gerenciamento de Estado e Formulários

* Zustand: Utilizada para gerenciar o estado global da aplicação de maneira simples e eficiente.
* React Hook Form: Facilita o controle de formulários em React, com validação e manipulação de dados eficientes.
*@hookform/resolvers: Integração de validação para React Hook Form, usada junto com o Zod para validação de esquemas.

##### Controle de Acesso e Autorização
* @casl/ability: Gerenciamento de permissões e controle de acesso para definir o que o usuário pode ou não fazer na aplicação.
* @casl/react: Integração da CASL com o React, facilitando o controle de permissões em componentes.
Interface do Usuário e Componentes de UI
* @radix-ui/react- (Avatar, Collapsible, Dialog, Dropdown Menu, Label, Scroll Area, Slot, Toast, Tooltip)**: Conjunto de componentes de UI acessíveis e estilizados, facilitando a criação de uma interface de usuário consistente.
* lucide-react: Ícones SVG reativos para o React, usados para enriquecer a interface.
* tailwind-merge: Ajuda a combinar classes do Tailwind CSS de forma condicional.
* tailwindcss-animate: Extensão do Tailwind CSS para animações, adicionando transições suaves e efeitos animados.
* class-variance-authority: Facilita a aplicação de classes CSS condicionais e variantes.
#### Biblioteca de Rotas
* react-router e react-router-dom: Gerencia a navegação da aplicação, permitindo o uso de rotas dinâmicas e roteamento baseado em componentes no DOM.
#### Gerenciamento de Dados e API
* @tanstack/react-query: Gerencia o estado de dados e cache, ideal para buscar dados de APIs de forma otimizada.
* axios: Biblioteca para realizar requisições HTTP, utilizada para comunicação com APIs.
* jwt-decode: Decodifica JSON Web Tokens, permitindo a leitura e extração de informações de um token JWT.
#### Utilidades e Outras
* clsx: Facilita a manipulação de classes CSS condicionalmente.
* uuid: Gera identificadores únicos universais (UUIDs), úteis para identificar de maneira única itens e usuários.
#### Ferramentas e Utilitários de Build
* Vite: Ferramenta de build rápida para projetos frontend, permitindo desenvolvimento rápido e eficiente com módulos ES.
#### Validação de Dados
* Zod: Biblioteca de validação de esquemas para dados, garantindo que dados sigam o formato e as regras definidas antes de serem processados.
Essas dependências juntas permitem que o projeto rode de maneira eficiente, com uma interface moderna, navegação fluida, controle de acesso e permissões robustas, além de um gerenciamento de estado eficiente e suporte completo para formulários e validação de dados.