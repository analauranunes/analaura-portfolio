import Image from "next/image";
import Link from "next/link";
import { ContainerDiv } from "./style";
import universeImg from "../../Assets/steven.gif";
import linkedinImg from "../../Assets/linkedin.png";
import mailImg from "../../Assets/gmail.png";
import phoneImg from "../../Assets/phone.png";
import resumeImg from "../../Assets/resume.png";

function ContactComponent() {
  return (
    <ContainerDiv>
      <Link href={"/"}>
        <a id="header-ana">Ana Laura.</a>
      </Link>
      <span id={"h1-container"}>
        &lt;
        <h1> Contatos </h1>
        /&gt;
      </span>
      <div>
        <Image width={"200px"} height={"200px"} src={universeImg} alt={""} />
      </div>
      <h2>
        Você chegou até aqui! Obrigada pela atenção e carinho ao me conhecer,
        meus contatos estão logo abaixo. Bora bater um papo!
      </h2>
      <div id={"links-container"}>
        <Link href={"https://www.linkedin.com/in/ana-laura-nunes-developer/"}>
          <a target={"_blank"}>
            <Image
              width={"100px"}
              height={"100px"}
              src={linkedinImg}
              alt=""
              className={"links-image"}
            />
          </a>
        </Link>
        <Link href={"mailto:analaurahdn@gmail.com"}>
          <a target={"_blank"}>
            <Image
              width={"100px"}
              height={"100px"}
              src={mailImg}
              alt=""
              className={"links-image"}
            />
          </a>
        </Link>
        <Link href={"tel:15981881998"}>
          <a target={"_blank"}>
            <Image
              width={"100px"}
              height={"100px"}
              src={phoneImg}
              alt=""
              className={"links-image"}
            />
          </a>
        </Link>
        <Link
          href={
            "https://cdn.discordapp.com/attachments/978437256807325756/988802757202968607/AnaLauraNunes.pdf"
          }
        >
          <a target={"_blank"}>
            <Image
              width={"100px"}
              height={"100px"}
              src={resumeImg}
              alt=""
              className={"links-image"}
            />
          </a>
        </Link>
      </div>
    </ContainerDiv>
  );
}

export default ContactComponent;
