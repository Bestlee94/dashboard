import { PageIcon, PageLi, PageSpan, PageUl } from "./Pagenation.styles";

export default function PagenationUI(props: any) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickPrev = () => {
    props.paginate((prev: any) => prev - 1);
  };

  const onClickNext = () => {
    props.paginate((prev: any) => prev + 1);
  };

  return (
    <div style={{ margin: "auto" }}>
      <nav style={{ marginTop: "10px" }}>
        <PageUl>
          <PageIcon src="/image/left2.png" />
          <PageIcon src="/image/left.png" onClick={onClickPrev} />
          {pageNumbers.map((number: any) => (
            <PageLi key={number}>
              <PageSpan onClick={() => props.paginate(number)}>
                {number}
              </PageSpan>
            </PageLi>
          ))}
          <PageIcon src="/image/right.png" onClick={onClickNext} />
          <PageIcon src="/image/right2.png" />
        </PageUl>
      </nav>
    </div>
  );
}
