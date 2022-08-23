import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ListBox = styled.div`
  margin-top: 60px;
  margin-left: 130px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 150%;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const HeaderText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: white;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;
export const HeaderNum = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-left: 3px;
  color: #4498f2;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7px;
  width: 110px;
  height: 32px;
  background: #000000;
  border-top-left-radius: 15px 15px;
  border-top-right-radius: 15px 15px;
`;

export const Line = styled.div`
  position: relative;
  width: 560px;
  height: 0px;
  border: 1px solid #000000;
  top: 30px;
  right: 110px;
`;

export const Icon = styled.img`
  position: relative;
  right: 135px;
`;

export const FooterBox = styled.div`
  padding-top: 20px;
  padding-right: 120px;
`;
