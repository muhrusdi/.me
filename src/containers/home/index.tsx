import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Container } from "components";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  HeroTitle, Header, Body, Grid, GridItem, Footer, Year, ButtonMore,
} from "./styled";

const Home: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [hostname, setHostname] = useState("");
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dtc-thumb.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  useEffect(() => {
    yRange.onChange((v) => setIsComplete(v >= 1));
  }, [yRange]);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const handleClick = (e) => {
    const { style } = e.currentTarget;
    style.position = "absolute";
    style.left = 0;
    style.right = 0;
    style.top = 0;
  };


  return (
    <Container>
      <Header>
        <HeroTitle>
          Works.
        </HeroTitle>
      </Header>
      <Body>
        <Grid>
          <GridItem
            whileTap={{ scale: 0.7 }}
          >
            <div>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </GridItem>
          <GridItem
            whileTap={{ scale: 0.7 }}
          >
            <div>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </GridItem>
          <GridItem
            whileTap={{ scale: 0.7 }}
          >
            <div>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </GridItem>
          <GridItem
            whileTap={{ scale: 0.7 }}
          >
            <div>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </GridItem>
        </Grid>
      </Body>
      <Footer>
        <div style={{ paddingBottom: 40 }}>
          <ButtonMore>More</ButtonMore>
        </div>
        <p>
Designed and build by muhrusdi. Powered by GatsbyJS.
        </p>
        <ul>
          <li>
            <a href={`https://muhrusdi.com?ref=${hostname}`} target="_blank">.com</a>
          </li>
          <li>
            <a href="#" target="_blank">github</a>
          </li>
          <li>
            <a href="#" target="_blank">facebook</a>
          </li>
          <li>
            <a href="#" target="_blank">twitter</a>
          </li>
          <li>
            <a href="#" target="_blank">linkedin</a>
          </li>
        </ul>
        <Year>{new Date().getFullYear()}</Year>
      </Footer>
    </Container>
  );
};

export default Home;
