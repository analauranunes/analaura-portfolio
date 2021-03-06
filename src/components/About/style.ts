import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  animation: 1s ease-out 0s 1 slideInFromTop;
  color: var(--primary-pink);
  display: flex;
  flex-direction: column;

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
  span {
    display: flex;
    font-size: 30px;
    align-self: center;
    gap: 5px;
    color: #A287F4;
    h1 {
      font-weight: 700;
      color: var(--primary-purple);
    }
  }

  a {
    position: fixed;
    z-index: 1;
    right: 2%;
    top: 1%;
    text-decoration: none;
    font-size: 22px;
    color: transparent;
    padding: 5px;
    border-radius: 5px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px whitesmoke;
  }

  #container-about {
    padding-top: 40px;
    display: flex;
    flex-direction: column;

    #container-img {
      max-width: 200px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-self: center;
    }

    #container-me {
      padding: 10px;
      text-align: justify;

      p {
        color: #716f81;
        font-size: 20px;
      }
    }

    .container-techs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding-top: 20px;
      padding-bottom: 30px;
    }
  }

  @media (min-width: 915px) {
    animation: 1s ease-out 0s 1 slideInFromLeft;

    #container-about {
      gap: 30px;
    }

    #container-me {
      max-width: 800px;
      align-self: center;
    }

    .container-techs {
      max-width: 900px;
      align-self: center;
    }
  }
`;
