import Image from "next/image";
import Link from "next/link";
import projectsInfo from "../../data/projects";
import { ContainerDiv } from "./style";
import appLink from "../../Assets/www.png";
import gitHubLink from "../../Assets/github.png";

function ProjectsComponent() {
  return (
    <ContainerDiv>
      <Link href={"/"}>
        <a id="header-ana">Ana Laura.</a>
      </Link>
      <span id={"h1-container"}>
        &lt;
        <h1> Projetos </h1>
        /&gt;
      </span>
      <ul>
        {projectsInfo.map((project, index) => (
          <li key={index}>
            <span className={"h3-container"}>
              &lt;
              <h3> {project.name} </h3>
              /&gt;
            </span>
            <Image
              width={"270px"}
              height={"180px"}
              src={project.image}
              alt={project.name}
              className={"project-img"}
            />
            <p className={"p-description"}>{project.description}</p>
            <span className={"techs-span"}>{project.techs}</span>
            <div className={"container-links"}>
              <Link href={project.app}>
                <a target={"_blank"}>
                  <Image
                    width={"40px"}
                    height={"40px"}
                    src={appLink}
                    alt=""
                    className={"links-image"}
                  />
                </a>
              </Link>
              <Link href={project.gitHub} target={"_blank"}>
                <a target={"_blank"}>
                  <Image
                    width={"40px"}
                    height={"40px"}
                    src={gitHubLink}
                    alt=""
                    className={"links-image"}
                  />
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </ContainerDiv>
  );
}

export default ProjectsComponent;
