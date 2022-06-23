import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  animation: 1s ease-out 0s 1 slideInFromTop;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

  span {
    font-size: 30px;
    text-align: center;
  }

  #h1-container {
    display: flex;
    gap: 5px;
    color: #a287f4;
    font-size: 60px;

    h1 {
      color: var(--primary-purple);
    }
  }

  a {
    text-decoration: none;
    border: 1px solid var(--primary-purple);
    background: #a287f4;
    color: var(--primary-white);
    border-radius: 5px;
    padding: 10px;
    transition: 1.5s;

    :hover {
      transition: 1.5s;
      background: var(--primary-purple);
    }
  }

  @media (min-width: 915px) {
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
`;
