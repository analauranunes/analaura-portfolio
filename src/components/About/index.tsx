import { ContainerDiv } from "./style";
import girlGame from "../../Assets/girl-about.png";
import Image from "next/image";
import Link from "next/link";
import techsImg from "../../data/knowledge";
import learningImg from "../../data/learning";

function AboutComponent() {
  return (
    <ContainerDiv>
      <Link href={"/"}>Ana Laura.</Link>
      <div id="container-about">
        <div id="container-img">
          <Image width={"200px"} height={"200px"} src={girlGame} alt="" />
        </div>
        <span>
          &lt;
          <h1> Sobre mim </h1>
          /&gt;
        </span>
        <div id="container-me">
          <p>
            Prazer, meu nome é Ana Laura! Tenho 24 anos, nascida e criada em
            Sorocaba/SP, porém com muita vontade de conhecer cada vez mais os
            lugares do mundo. Sempre me senti muito perdida na vida, sem noção
            do que gostaria de seguir, mas em mente que gostaria de fazer a
            diferença no que chegasse a escolher. Descobri programação pela
            minha namorada. Embora ela não seja nem remotamente perto dessa
            área, acabou me contando dessa tal modalidade de fazer um curso e
            pagar somente quando estivesse empregado. Comecei a pesquisar sobre,
            acabei me deparando com a Kenzie Academy Brasil, fiz todo o processo
            seletivo e consegui entrar no curso de full-stack. Eu finalmente me
            encontrei em desenvolvimento de web, é uma paixão que eu não
            esperava ter, é um futuro que consigo visualizar mais do que certo!
            Além de ser desenvolvedora, no momento trabalho com recreação também
            e é algo que me divirto bastante fazendo. Fora isso, minhas outras
            paixões são o idioma inglês, games, animes e judô.
          </p>
        </div>
        <span>
          &lt;
          <h1> Conhecimentos </h1>
          /&gt;
        </span>
        <div className="container-techs">
          {techsImg.map((tech, index) => (
            <div key={index}>
              <Image
                width={"100px"}
                height={"100px"}
                src={tech.url}
                alt={tech.name}
              />
            </div>
          ))}
        </div>
        <span>
          &lt;
          <h1> Aprendendo </h1>
          /&gt;
        </span>
        <div className="container-techs">
          {learningImg.map((tech, index) => (
            <div key={index}>
              <Image
                width={"100px"}
                height={"100px"}
                src={tech.url}
                alt={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </ContainerDiv>
  );
}

export default AboutComponent;
