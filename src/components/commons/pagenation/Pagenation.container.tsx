import PagenationUI from "./Pagenation.presenter";

export default function Pagenation(props: any) {
  return (
    <PagenationUI
      data={props.data}
      postsPerPage={props.postsPerPage}
      totalPosts={props.totalPosts}
      paginate={props.paginate}
    />
  );
}
