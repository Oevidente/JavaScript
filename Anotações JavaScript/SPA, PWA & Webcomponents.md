# SPA, PWA & Webcomponents

# Single Page Application (SPA)

São aplicações que concentram seu conteúdo em apenas uma página.
Ou seja, quando ocorre uma modificação de dados a página não precisa atualizar por completo, somente o trecho que sofreu alteração terá de renderizar.

---

# Progressive Web App

São aplicações hibridas entre Web e Mobile.
Não são aplicativos nativos.
Permite ao usuário ter a mesma experiência da página web utilizando um app instalado, sem ter os dados do browser.
Os dados são armazenados em cache, permitindo ao usuário utilizar o app mesmo sem acesso a internet.
Permite reutilizar grande parte do código original (HTML, CSS e JavaScript).

### Facilidades do PWA:

- Reutilizar características do desenvolvimento nativo de aplicações.
    - Push Notifications
    - Acesso ao microfone
- É possível construir utilizando ferramentas de networking
    - Angular
    - React
    - Vue

---

# Webcomponents

É a forma de criar componentes reutilizáveis para web de forma nativa, utilizando HTML, CSS e JavaScript.

### Características:

- Custom Elements
    
    É um mecanismo que possibilita a criação de **novos elementos** ou **tags** para páginas HTML, deixando o seu conteúdo mais **semanticamente** desenvolvido. É possível desenvolver **códigos individuais, organizados e concisos**, para elementos que possuem uma **função única**. A herança dos elementos que já estão dispostos no código também é permitida, e a customização é mais ajustável, estabelecendo, também, fundação para o design e permite usar novos tipos de DOM.
    
- Shadow DOM
    
    O Shadow DOM é um recurso onde é possível gerar **bolhas dentro do código**. Os elementos no código ficam, então, encapsulados e **não seguem as normas** delimitadas no geral do componente. O DOM de 1 **componente**, renderizado pelo navegador, **fica oculto**, criando, também, um **escopo para o CSS**. É, ainda, permitido criar trechos de nós de elementos que fiquem expostos dentro do componente, ainda que não faça parte do mesmo.
    
    Algumas formas convencionais, como no navegador Internet Explorer, não suportam esse mecanismo, tendo que ser usado um **polyfill** para rodar naturalmente.
    
- HTML Templates
    
    Com eles é possível **definir modelos de HTML** em fragmentos de marcação **inertes ao código**, não usados quando a página carrega, que mais tarde podem ser instanciados para execução. Ficam invisíveis e renderizados. Seu conteúdo não é processado no navegador até ser ativado por uma função JavaScript.
    
- HTML Imports
    
    Ele **importa a HTML completa**, até o JavaScript e seu CSS embutido. A página importada é **paralelamente processada** enquanto a já criada roda normalmente. Mesmo assim, é o mais problemático dos recursos, pois precisa usar um **polyfill para os navegadores que não são compatíveis**, por exemplo, nos navegadores baseados em Webkit, o suporte será automático, já para navegadores como Opera e Mozilla, tem de ser feito manualmente. O Internet Explorer ainda não tem previsão para o ajuste.
    

### Ferramentas de Webcomponents:

- Stenciljs