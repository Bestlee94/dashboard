import BoardsListCardUI from "./BoardListCard.presenter";

export default function BoardsListCard(props: any) {
  return (
    <BoardsListCardUI
      data={props.data}
      keyword={props.keyword}
      postsPerPage={props.postsPerPage}
      totalPosts={props.totalPosts}
      paginate={props.paginate}
    />
  );
}
