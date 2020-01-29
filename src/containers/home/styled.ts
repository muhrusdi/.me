/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { Button } from "antd";
import { motion } from "framer-motion";

export const Header = styled.div`
  padding: 60px 0;
  margin-bottom: 60px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 250px;
`;

export const GridItem = styled(motion.div)`
  background: #FFFFFF;
  border: 1px solid #f9f9f9;
  box-shadow:
    0 19.1px 31.3px -44px rgba(0, 0, 0, 0.121),
    0 89px 69px -44px rgba(0, 0, 0, 0.24);
  transition: .8s all ease;
  cursor: pointer;
  &:hover {
    box-shadow:
      0 49.5px 58.4px rgba(0, 0, 0, 0.06),
      0 231px 417px rgba(0, 0, 0, 0.12);
  }
  & > div {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Body = styled.div`
  position: relative;
  top: 250px;
  padding-bottom: 280px;
`;

export const HeroTitle = styled.h1`
  font-size: 75px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  font-weight: 900;
`;

export const Footer = styled.footer`
  padding: 60px 0;
  text-align: center;
  color: #8a8a8a;
  p {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    li {
      position: relative;
      padding: 0 10px;
      &:not(:first-of-type) {
        &:before {
          width: 1px;
          background: #d2d2d2;
          position: absolute;
          left: 0;
          top: 0%;
          bottom: 0;
          content: " ";
        }
      }
    }
  }
`;

export const Year = styled.span`
  display: block;
  padding-top: 20px;
  font-weight: 900;
  color: #333;
`;

export const ButtonMore = styled(Button)`
  &&& {
    border-radius: 30px;
    text-transform: uppercase;
    background: transparent;
    padding: 0 40px;
  }
`;
