import styled from "styled-components";

type Props = {
  type?: string,
}

const Container = styled.div(
  {
    margin: "0 auto",
    padding: "0 16px",
  },
  (props: Props) => {
    switch (props.type) {
    case "sm": {
      return {
        maxWidth: 546,
      };
    }
    case "md": {
      return {
        maxWidth: 876,
      };
    }
    case "xl": {
      return {
        maxWidth: 1200,
      };
    }
    default: {
      return {
        maxWidth: 992,
      };
    }
    }
  },
);

export default Container;
