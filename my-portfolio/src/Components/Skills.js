import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Button } from "react-bootstrap"; // Import Button component from react-bootstrap
import { Row } from "react-bootstrap";

function Skills() {
  const row1 = [
    "https://www.cdnlogo.com/logos/h/90/html-5.svg",
    "https://perishablepress.com/wp/wp-content/images/2008/misc-chunks/css-logo.jpg",
    "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png",
    "https://www.dotnettricks.com/images/technologies/expressjs.svg",
    "https://miro.medium.com/v2/resize:fit:940/1*ZYxFlLbfeUClk5cScVxZxw.png",
  ];

  const row2 = [
    "https://www.datocms-assets.com/48294/1671538125-mern-stack-5-nodejs.png?auto=format",
    "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
    "https://www.cdnlogo.com/logos/t/34/tailwind-css.svg",
    "https://logowik.com/content/uploads/images/911_c_logo.jpg",
    "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png",
    "https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5eef857ac5443d6519886e5a_PS.png",
  ];

  return (
    <div className="overflow-hidden">
      <AppContainer>
        <Wrapper>
          <Row>
            <div className="text-center project-heading">
              My <span>Skills</span>
            </div>
            <p className="project-para pb-5">
              Skills and Stacks Expertise Developed .
            </p>
          </Row>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
}

export default Skills;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
