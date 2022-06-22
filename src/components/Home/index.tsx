import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import homeVector from "../../Assets/home.png";

function HomeComponent() {
  return (
    <S.ContainerDiv>
      <S.ContainerInfos>
        <S.ContainerSpans>
          <Link href={"/about"}><span id="hiAbout-span"></span></Link>
          <Link href={"/projects"}><span id="iAmProjects-span"></span></Link>
          <Link href={"/contact"}><span id="anaContact-span"></span></Link>
        </S.ContainerSpans>
      </S.ContainerInfos>
      <S.ContainerImg>
        <Image src={homeVector} alt="code girl" />
      </S.ContainerImg>
      <span id="clickMobile-span"></span>
    </S.ContainerDiv>
  );
}

export default HomeComponent;