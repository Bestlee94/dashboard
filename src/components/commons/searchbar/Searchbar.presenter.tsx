import {
  DropdownBox,
  DropdownItem,
  SearchBox,
  SearchIcon,
  SearchInput,
  TextToken,
  Wrapper,
} from "./Searchbar.styles";
import { v4 as uuidv4 } from "uuid";

export default function SearchBarUI(props: any) {
  return (
    <Wrapper>
      <SearchBox>
        <SearchInput
          placeholder="검색"
          onChange={props.onChangeSearchbar}
        ></SearchInput>
        <SearchIcon src="/image/search.png" />
      </SearchBox>
      {props.keyword && (
        <DropdownBox>
          {props.data.map((el: any) => (
            <DropdownItem key={uuidv4()}>
              {el.nickname
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el: any) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
            </DropdownItem>
          ))}
        </DropdownBox>
      )}
    </Wrapper>
  );
}
