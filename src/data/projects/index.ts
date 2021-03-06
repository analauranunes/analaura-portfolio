import counterImg from "../../Assets/counter.png";
import formImg from "../../Assets/form.png";
import hamburguerImg from "../../Assets/hamburgueria.png";
import reposImg from "../../Assets/repos.png";
import cartoonImg from "../../Assets/cartoon.png";
import nuImg from "../../Assets/nu.png";
import beraTopImg from "../../Assets/beraTop.png";
import portfolioImg from "../../Assets/portfolio.png";
import recipesImg from "../../Assets/recipes.png";
import kenzieHubImg from "../../Assets/kenzie-hub.png";
import catDogImg from "../../Assets/cat-dog.png";
import medalsBoardImg from "../../Assets/medals.png";

const projectsInfo = [
  {
    name: "Cats and Dogs",
    description:
      "Aplicação que gera fotos aleatórias de gatos e cachorros com requisições à API.",
    techs: "JavaScript | HTML | API Rest | CSS",
    image: catDogImg,
    app: "https://kenzie-academy-brasil-developers.github.io/m2-atividade-the-dog-and-cat-api-sprint-3b-analauranunes/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m2-atividade-the-dog-and-cat-api-sprint-3b-analauranunes",
  },
  {
    name: "Kenzie Hub",
    description:
      "Aplicação onde permite o usuário organizar o que está estudando e em que nível está. Podendo editar e deletar suas tecnologias.",
    techs:
      "React.js | API Rest | Router Dom | Styled-Components | React Toastify",
    image: kenzieHubImg,
    app: "https://react-entrega-s2-kenzie-hub-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-analauranunes",
  },
  {
    name: "Contador",
    description: "Contador desenvolvido com intuito de treinar redux.",
    techs: "React.js | Redux | Styled-Components",
    image: counterImg,
    app: "https://react-atividade-s3-contador-com-redux-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s3-contador-com-redux-analauranunes",
  },
  {
    name: "Formulário de Cadastro",
    description:
      "Aplicação de cadastro onde foi utilizado a biblioteca de hook form, verficações com yup e redirecionamento para uma tela com informação do usuário.",
    techs: "React.js | Router Dom | Hook Form | Yup | Styled-Components",
    image: formImg,
    app: "https://react-entrega-s2-formulario-de-cadastro-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-analauranunes",
  },
  {
    name: "Kenzie Hamburgueria",
    description:
      "Aplicação simulando e-commerce de hamburgueres, podendo adicionar os produtos no carrinho e ter o valor da compra do usuário.",
    techs: "React.js | CSS",
    image: hamburguerImg,
    app: "https://react-entrega-s1-hamburgueria-da-kenzie-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-analauranunes",
  },
  {
    name: "Tecnologias",
    description:
      "Página web construída para ter informações de outras aplicações(como facebook) e suas tecnologias nos repositórios do GitHub.",
    techs: "React.js | Styled-Components | Toastify | API Rest",
    image: reposImg,
    app: "https://react-atividade-s2-github-card-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s2-github-card-analauranunes",
  },
  {
    name: "Kenzie Cartoon",
    description:
      "Aplicação de e-commerce para simular venda de decks de desenhos animados, tendo a opção de entrar no carrinho do usuário e ter as informações da compra.",
    techs:
      "React.js | Router Dom | Context API | Styled-Components | React Toastify",
    image: cartoonImg,
    app: "https://react-entrega-s3-kenzishop-com-context-api-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-analauranunes",
  },
  {
    name: "Quadro de Medalhas",
    description:
      "Aplicação que tem como objetivo verificar quadro de medalhas das olímpiadas com requisação à API.",
    techs: "JavaScript | HTML | API Rest | CSS",
    image: medalsBoardImg,
    app: "https://crispy-happiness-4338e5bf.pages.github.io/?pesquisa=Brasil",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/extra-quadro-medalhas-m2-sprint-3a-analauranunes",
  },
  {
    name: "Nu Kenzie",
    description:
      "Aplicação construída para controle de finanças, nela você pode ver seus gastos e entradas, podendo ter noção de como está balanceado os valores.",
    techs: "React.js | CSS",
    image: nuImg,
    app: "https://react-entrega-s1-nu-kenzie-analauranunes.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-analauranunes",
  },
  {
    name: "BeraTop",
    description:
      "Aplicação construída em grupo, a BeraTop foi construída com intuito de ter informações de cervejas, podendo deixar comentários sobre elas e ver as avaliações das mesmas.",
    techs:
      "React.js | Router Dom | Context API | API Rest | Axios | Hook Form | Yup | Styled-Components | React Icons | React Toastify | React Modal",
    image: beraTopImg,
    app: "https://capstone-bera-top.vercel.app/",
    gitHub: "https://github.com/analauranunes/capstone-bera-top",
  },
  {
    name: "Portfólio",
    description:
      "Aplicação construída para me conhecer e ver os projetos em que venho trabalhando.",
    techs: "Next.js | Typescript | Styled-Components",
    image: portfolioImg,
    app: "https://analaura-portfolio.vercel.app/",
    gitHub: "https://github.com/analauranunes/analaura-portfolio",
  },
  {
    name: "Blog Receitas",
    description:
      "API rest construída com intuíto de treinar o back-end, nela tem alguns endpoints privados e públicos, um blog onde você pode postar suas receitas e podendo entrar no banco de receitas oficiais do blog.",
    techs: "Node.js | JSON Server",
    image: recipesImg,
    app: "https://kenzie-recipes.herokuapp.com/recipes",
    gitHub: "https://github.com/analauranunes/API-recipes",
  },
];

export default projectsInfo;
