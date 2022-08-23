import SearchBarUI from "./Searchbar.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";

export default function SearchBar(props: any) {
  const getDebounce = _.debounce((data: string) => {
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return (
    <SearchBarUI
      data={props.data}
      onChangeSearchbar={onChangeSearchbar}
      keyword={props.keyword}
    />
  );
}
