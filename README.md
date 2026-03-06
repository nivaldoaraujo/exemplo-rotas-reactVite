# 🚀 React + Vite — Rotas e Navegação com React Router

Este projeto demonstra como criar uma aplicação React utilizando Vite e implementar rotas e navegação entre páginas com React Router DOM.

O objetivo é mostrar passo a passo:

- Como criar um projeto React com Vite
- Como instalar as dependências necessárias
- Como criar rotas
- Como implementar navegação entre páginas
- Qual a importância das rotas em aplicações React

---

# 📦 1. Criando o projeto React com Vite

Primeiro crie um novo projeto utilizando o Vite:

    npm create vite@latest meu-projeto

Durante a configuração selecione:

    Framework: React
    Variant: JavaScript

Depois acesse a pasta do projeto:

    cd meu-projeto

Instale as dependências:

    npm install

Execute o projeto:

    npm run dev

O projeto estará disponível em:

    http://localhost:5173

---

# 📦 2. Instalando o React Router

Para trabalhar com rotas no React precisamos instalar o React Router DOM.

Execute o comando:

    npm install react-router-dom

Essa biblioteca permite criar navegação entre páginas sem recarregar o site, característica comum em aplicações SPA (Single Page Application).

---

# 📁 3. Estrutura básica do projeto

Uma estrutura simples para organização do projeto:

    src
     ├── pages
     │    ├── Home.jsx
     │    ├── Sobre.jsx
     │    └── Contato.jsx
     │
     ├── components
     │    └── Navbar.jsx
     │
     ├── App.jsx
     └── main.jsx

---

# 🧠 4. O que são Rotas no React?

Rotas permitem navegar entre diferentes páginas dentro da aplicação sem recarregar o navegador.

Em aplicações React normalmente criamos SPAs (Single Page Applications), onde apenas partes da interface são atualizadas.

Exemplo de rotas:

    /           → Página inicial
    /sobre      → Página sobre
    /contato    → Página de contato

O React Router controla qual componente será exibido dependendo da URL acessada.

---

# ⚙️ 5. Configurando o Router

No arquivo main.jsx configuramos o BrowserRouter, responsável por controlar a navegação da aplicação.

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";
    import { BrowserRouter } from "react-router-dom";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

---

# 🧭 6. Criando as rotas

No arquivo App.jsx criamos as rotas da aplicação.

    import { Routes, Route } from "react-router-dom";
    import Home from "./pages/Home";
    import Sobre from "./pages/Sobre";
    import Contato from "./pages/Contato";

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      );
    }

    export default App;

Explicação:

| Elemento | Função |
|--------|--------|
| Routes | Agrupa todas as rotas da aplicação |
| Route | Define uma rota específica |
| path | Caminho da URL |
| element | Componente exibido |

---

# 🔗 7. Criando navegação entre páginas

Para navegar entre páginas utilizamos o componente Link.

Exemplo de menu (Navbar.jsx):

    import { Link } from "react-router-dom";

    function Navbar() {
      return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      );
    }

    export default Navbar;

O Link funciona como uma tag `<a>`, porém sem recarregar a página.

---

# 📄 8. Criando as páginas

Home.jsx

    function Home() {
      return <h1>Página Inicial</h1>;
    }

    export default Home;

Sobre.jsx

    function Sobre() {
      return <h1>Sobre o Projeto</h1>;
    }

    export default Sobre;

Contato.jsx

    function Contato() {
      return <h1>Página de Contato</h1>;
    }

    export default Contato;

---

# 🚀 9. Importância das rotas em aplicações React

As rotas são fundamentais porque:

- Organizam melhor a aplicação
- Permitem múltiplas páginas
- Melhoram a experiência do usuário
- Evitam recarregamento da página
- Facilitam manutenção e escalabilidade do projeto

Sem rotas, aplicações maiores ficariam difíceis de estruturar e manter.

---

# 🛠 Tecnologias utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- HTML
- CSS

---

# ▶️ Como executar o projeto

Clone o repositório:

    git clone https://github.com/seu-usuario/seu-repositorio.git

Acesse a pasta:

    cd seu-repositorio

Instale as dependências:

    npm install

Execute o projeto:

    npm run dev

---

Este projeto foi criado com o objetivo de demonstrar o funcionamento de rotas e navegação em aplicações React utilizando Vite.

Primeiro crie um novo projeto utilizando o Vite:

```bash
npm create vite@latest meu-projeto
