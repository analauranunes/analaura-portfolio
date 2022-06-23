import styled from "styled-components";

export const ContainerDiv = styled.div`
  animation: 1s ease-out 0s 1 slideInFromTop;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #481380;

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
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px whitesmoke;
  }

  #h1-container {
    display: flex;
    font-size: 35px;
    align-self: center;
    gap: 5px;
    color: #a287f4;
    padding-top: 50px;
    padding-bottom: 30px;
    h1 {
      font-weight: 700;
      color: var(--primary-purple);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-bottom: 30px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      background: #fff0f8;
      border: 1px solid #dfbaf7;
      box-shadow: 0 0 1em #dfbaf7;
      border-radius: 5px;
      max-width: 300px;
      height: 440px;
      transition: 0.8s;

      :hover {
        transition: 0.8s;
        overflow: hidden;
        transform: scale(1.05);
      }

      h3,
      p,
      span,
      a,
      .links-image,
      .container-links {
        background: transparent;
      }

      .h3-container {
        display: flex;
        gap: 5px;
        font-size: 22px;
        color: #A287F4;

        h3{
            color: #481380;
        }
      }

      .p-description,
      .techs-span {
        width: 90%;
      }

      .techs-span {
      }

      .project-img {
        object-fit: fill;
        height: 200px;
      }

      .container-links {
        display: flex;
        gap: 20px;
      }
    }
  }

  @media (min-width: 650px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 915px) {
    animation: 1s ease-out 0s 1 slideInFromLeft;
    padding-left: 6%;
  }
`;
