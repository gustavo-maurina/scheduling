import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.div`
  background-color: ${theme.bgColor};
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
