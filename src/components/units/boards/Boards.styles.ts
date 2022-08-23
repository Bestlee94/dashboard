import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 56px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 175%;
  }
`;

export const Contents = styled.div`
  margin-top: 17px;
  width: 100%;
  height: 48px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 175%;
  }
`;
