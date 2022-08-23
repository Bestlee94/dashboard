import SearchBar from "../../commons/searchbar/Searchbar.container";
import BoardsList from "../boardslist/BoardsList.container";
import { Contents, Title, Wrapper } from "./Boards.styles";

export default function BoardsUI(props: any) {
  return (
    <Wrapper>
      <Title>화섬 아파트 지구家 입주민들</Title>
      <Contents>
        화섬 아파트에 입주한 입주민들입니다.<br></br> 같이 화성에 가는날을
        기다리며 화목하게 지내봐요!
      </Contents>
      <SearchBar
        data={props.data}
        onChangeKeyword={props.onChangeKeyword}
        keyword={props.keyword}
      />
      <BoardsList
        data={props.data}
        keyword={props.keyword}
        postsPerPage={props.postsPerPage}
        totalPosts={props.totalPosts}
        paginate={props.paginate}
      />
    </Wrapper>
  );
}
