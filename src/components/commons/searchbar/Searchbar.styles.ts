import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/styles/media";
import { ITextTokenProps } from "../../units/boardslistcard/BoardListCard.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 175%;
  }
`;

export const SearchBox = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 32px;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 10px;
`;

export const SearchIcon = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
  right: 20px;
  top: 10px;
`;

export const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 400px;
  height: 172px;
  border: 1px solid #000000;
  border-radius: 0px 0px 15px 15px;
`;

export const DropdownItem = styled.div`
  height: 50px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const TextToken = styled.span`
  width: 30px;
  height: 50px;
  background-color: ${(props: ITextTokenProps) =>
    props.isMatched ? "#4498F2" : "none"};
`;
