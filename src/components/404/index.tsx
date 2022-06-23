import Image from "next/image";
import Link from "next/link";
import monsterImg from "../../Assets/monster.png";
import { ContainerDiv } from "./style";

function FourOhFourComponent() {
  return (
    <ContainerDiv>
      <span id={"h1-container"}>
        &lt;
        <h1> 404 </h1>
        /&gt;
      </span>
      <span>
        Oh, não! Você encontrou o Errinho, meu monstro. Ele é muito tímido, que
        tal voltar pra tela inicial?
      </span>
      <div id={"monster-container"}>
        <Image width={"350px"} height={"350px"} src={monsterImg} alt={""} />
      </div>
      <Link href={"/"}>Voltar para a home</Link>
    </ContainerDiv>
  );
}

export default FourOhFourComponent;
