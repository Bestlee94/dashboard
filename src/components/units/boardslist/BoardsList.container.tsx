import BoardsListUI from "./BoardsList.presenter";

export default function BoardsList(props: any) {
  return (
    <BoardsListUI
      data={props.data}
      keyword={props.keyword}
      postsPerPage={props.postsPerPage}
      totalPosts={props.totalPosts}
      paginate={props.paginate}
    />
  );
}
