# 🚀 Valor Futuro - Soluções Financeiras

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![License](https://img.shields.io/github/license/GuilhermeRM-a1/Valor-Futuro)

> *Portal web desenvolvido para modernizar a captação de clientes e apresentar o portfólio de serviços da empresa Valor Futuro.*

<div align="center">
  <img width="800" alt="Preview Home" src="https://github.com/user-attachments/assets/89069622-c1b5-451c-9162-a11de7d48927" />
  <img width="800" height="1049" alt="image" src="https://github.com/user-attachments/assets/c60573dc-8cf5-47fb-9ae1-209dec47ef8a" />
  <img width="800" height="1056" alt="image" src="https://github.com/user-attachments/assets/77d329e4-d839-4cfa-a994-2899b76ff4e3" />
</div>

## 📖 Sobre o Projeto

O **Valor Futuro** é um Projeto Integrador desenvolvido por acadêmicos do curso de Análise e Desenvolvimento de Sistemas. O objetivo principal foi solucionar a baixa presença online da empresa parceira, criando um canal digital eficiente para divulgação de serviços e captação de leads.

A aplicação consiste em uma Landing Page responsiva e dinâmica que apresenta produtos financeiros (como consórcios e seguros) e permite o contato direto via WhatsApp ou formulário.

## ✨ Funcionalidades

O projeto conta com recursos modernos de Front-end:

* **🛍️ Catálogo Dinâmico de Produtos:** Renderização automática de cards de produtos (Consórcios, Seguros, Energia Solar, etc.) a partir de objetos JavaScript.
* **📄 Página de Detalhes:** Geração dinâmica de páginas de detalhes via URL Parameters (`?id=1`), exibindo benefícios, requisitos e "como funciona" de cada serviço.
* **♿ Acessibilidade:** Ferramenta integrada para aumentar e diminuir o tamanho da fonte (A+/A-) para melhor legibilidade.
* **📱 Design Responsivo:** Layout adaptável para Mobile, Tablet e Desktop, com menu hambúrguer funcional.
* **🎥 Integração Multimídia:**
    * Banner de vídeo em background.
    * Vídeo institucional do YouTube incorporado.
    * Localização via Google Maps iframe.
* **📝 Captação de Leads:** Integração com Google Forms incorporado para cadastro de clientes.

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3** (Flexbox, Grid, Variáveis CSS e Media Queries)
* **JavaScript (ES6+)** (Manipulação de DOM, Módulos `import/export`)
* **Git & GitHub** (Versionamento)

## 📂 Estrutura do Projeto

```bash
Valor-Futuro/
├── assets/             # Imagens e ícones do projeto
├── modulos/            # Código fonte principal
│   ├── css/            # Estilos separados por componentes (header, cards, detalhes, etc.)
│   ├── js/             # Lógica da aplicação (dados.js, main.js, createcard.js)
│   ├── index.html      # Página Inicial
│   └── detalhes.html   # Página de modelo para detalhes do produto
└── Requisitos/         # Documentação acadêmica e análise
