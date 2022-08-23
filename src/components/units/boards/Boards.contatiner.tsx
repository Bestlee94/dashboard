import BoardsUI from "./Boards.presenter";
import { useEffect, useState } from "react";

export default function Boards() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  useEffect(() => {
    fetch("/db/data.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (data: any) => {
    let currentPosts = 0;
    currentPosts = data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <BoardsUI
      data={currentPosts(data)}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      postsPerPage={postsPerPage}
      totalPosts={data.length}
      paginate={setCurrentPage}
    />
  );
}
