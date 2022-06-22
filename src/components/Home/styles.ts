import styled from "styled-components";

export const ContainerDiv = styled.div`
  animation: 1s ease-out 0s 1 slideInFromTop;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  #clickMobile-span {
    ::before {
      content: "Clique nos textos para me conhecer";
    }
    color: #328bd9;
    padding-block: 5px;
    animation: shake 3.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }

  @media (min-width: 915px) {
    animation: 1s ease-out 0s 1 slideInFromLeft;
    flex-direction: row;
    padding-left: 6%;

    #clickMobile-span {
      ::before {
        content: "Passe pelos textos para me conhecer";
      }
      position: absolute;
      top: 90%;
      right: 37%;
    }
  }

  @media (min-width: 1420px) {
    #clickMobile-span {
      right: 43%;
    }
  }

  @media (min-width: 1770px) {
    #clickMobile-span {
      right: 47%;
    }
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  max-height: 300px;

  @media (min-width: 915px) {
    max-height: 400px;
  }
`;

export const ContainerSpans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  text-align: center;

  #hiAbout-span {
    &::before {
      content: "Olá!";
    }

    &::after {
      content: "Sobre";
      color: var(--primary-pink);
    }
  }

  #iAmProjects-span {
    &::before {
      content: "Eu sou";
    }

    &::after {
      content: "Projetos";
      color: var(--primary-purple);
    }
  }

  #anaContact-span {
    &::before {
      content: "a Ana.";
    }

    &::after {
      content: "Contato";
      color: var(--primary-dark-pink);
    }
  }

  span {
    cursor: pointer;
    font-size: 45px;
    color: var(--home-titles-cream);
    padding-block: 5px;

    &::before {
      display: inline-block;
      overflow: hidden;
      transition: 1.5s;
      opacity: 1;
    }

    &::after {
      display: inline-block;
      overflow: hidden;
      max-width: 0px;
      max-height: 0px;
      opacity: 0;
      transition: 1.5s;
      left: 0px;
      position: relative;
    }

    &:hover {
      &::before {
        height: 0px;
        width: 0px;
        transition: 1.5s;
        opacity: 0;
      }

      &::after {
        max-width: initial;
        max-height: initial;
        opacity: 1;
        transition: 1.5s;
        left: 15px;
      }
    }
  }

  @media (min-width: 915px) {
    width: 300px;
    span {
      font-size: 75px;
      text-align: left;
    }
  }
`;

export const ContainerImg = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 915px) {
    img {
      min-width: 510px;
      max-width: 800px;
    }
  }
`;
