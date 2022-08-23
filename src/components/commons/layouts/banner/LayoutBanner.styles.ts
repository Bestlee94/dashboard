import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url("/image/bannerbackground.png");
  background-size: contain;
  background-repeat: no-repeat;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 215%;
    background-size: cover;
    background-position: -500px 0px;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 500.16px;
  height: 500.16px;
  background-image: url("/image/banneritem.png");
  background-size: contain;
  background-repeat: no-repeat;

  @media ${breakPoints.tablet} {
    height: 135.25px;
    margin-left: 230px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 90px;
    height: 250.49px;
  }
`;
