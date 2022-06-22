import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import homeVector from "../../Assets/home.png";

function Home() {
  return (
    <S.ContainerDiv>
      <S.ContainerInfos>
        <S.ContainerSpans>
          <Link href={"/About"}><span id="hiAbout-span"></span></Link>
          <Link href={"/Projects"}><span id="iAmProjects-span"></span></Link>
          <Link href={"/Contact"}><span id="anaContact-span"></span></Link>
        </S.ContainerSpans>
      </S.ContainerInfos>
      <S.ContainerImg>
        <Image src={homeVector} alt="code girl" />
      </S.ContainerImg>
      <span id="clickMobile-span"></span>
    </S.ContainerDiv>
  );
}

export default Home;