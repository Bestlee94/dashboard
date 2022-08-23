import BoardsListCard from "../boardslistcard/BoardListCard.container";
import {
  FooterBox,
  HeaderBox,
  HeaderNum,
  HeaderText,
  Icon,
  Line,
  ListBox,
  Title,
  Wrapper,
} from "./BoardsList.styles";

export default function BoardsListUI(props: any) {
  return (
    <Wrapper>
      <ListBox>
        <HeaderBox>
          <Title>
            <HeaderText>입주민들</HeaderText>
            <HeaderNum>472</HeaderNum>
          </Title>
          <Line></Line>
          <Icon src="/image/list.svg"></Icon>
        </HeaderBox>
        <FooterBox>
          <BoardsListCard
            data={props.data}
            keyword={props.keyword}
            postsPerPage={props.postsPerPage}
            totalPosts={props.totalPosts}
            paginate={props.paginate}
          />
        </FooterBox>
      </ListBox>
    </Wrapper>
  );
}
