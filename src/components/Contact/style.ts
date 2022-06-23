import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  animation: 1s ease-out 0s 1 slideInFromTop;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary-purple);

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

  #header-ana {
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px whitesmoke;
  }

  #h1-container {
    padding-top: 45px;
    display: flex;
    font-size: 35px;
    gap: 5px;
    color: #a287f4;

    h1 {
      color: var(--primary-purple);
    }
  }

  h2 {
    padding: 30px 10px;
    text-align: justify;
    font-size: 28px;
    max-width: 700px;
    color: #716f81;
  }

  #links-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 25px;

    a {
      padding: 0px 15px;
      transition: 0.8s;
      :hover {
        transition: 0.8s;
        overflow: hidden;
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 915px) {
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
`;
