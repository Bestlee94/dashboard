import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/styles/media";
import { ITextTokenProps } from "./BoardListCard.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 560px;
  height: 94px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin: auto;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const MapBox = styled.div`
  display: flex;
  margin-top: 15px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 13px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: flex;
    width: 320px;
  }
`;

export const ProfileId = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ProfileNum = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #4498f2;
  margin-left: 5px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ProfileContents = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ContentsBox1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const ContentsBox2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Text = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-left: 5px;
  letter-spacing: -0.05em;
  color: #999999;
`;

export const TextToken = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${(props: ITextTokenProps) =>
    props.isMatched ? "#4498F2" : "none"};
`;
