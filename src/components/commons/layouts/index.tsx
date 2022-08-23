import styled from "@emotion/styled";
import { ReactNode } from "react";
import { breakPoints } from "../../../commons/styles/styles/media";
import LayoutBanner from "./banner/LayoutBanner.container";

const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    /* width: 120%; */
  }
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutBanner />
      <Body>{props.children}</Body>
    </>
  );
}
