import {
  Avatar,
  CardBox,
  ContentsBox1,
  ContentsBox2,
  Icon,
  MapBox,
  ProfileBox,
  ProfileContents,
  ProfileId,
  ProfileInfo,
  ProfileNum,
  Text,
  TextToken,
  Wrapper,
} from "./BoardListCard.styles";
import { v4 as uuidv4 } from "uuid";
import Pagenation from "../../commons/pagenation/Pagenation.container";

export default function BoardsListCardUI(props: any) {
  return (
    <Wrapper>
      {props.data.map((el: any) => (
        <MapBox key={uuidv4()}>
          <CardBox>
            <Avatar src={el.avatar}></Avatar>
            <ProfileBox>
              <ProfileInfo>
                <ProfileId>
                  {el.nickname
                    .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                    .split("@#$%")
                    .map((el: any) => (
                      <TextToken
                        key={uuidv4()}
                        isMatched={props.keyword === el}
                      >
                        {el}
                      </TextToken>
                    ))}
                </ProfileId>
                <ProfileNum>지구家 아파트 {el.building_count}개</ProfileNum>
              </ProfileInfo>
              <ProfileContents>
                <ContentsBox1>
                  <Icon src="/image/iconyellow.png"></Icon>
                  <Text>{el.nickname}</Text>
                </ContentsBox1>
                <ContentsBox2>
                  <Icon src="/image/iconblue.png"></Icon>
                  <Text>{el.oname}</Text>
                </ContentsBox2>
              </ProfileContents>
            </ProfileBox>
          </CardBox>
        </MapBox>
      ))}
      <Pagenation
        data={props.data}
        postsPerPage={props.postsPerPage}
        totalPosts={props.totalPosts}
        paginate={props.paginate}
      />
    </Wrapper>
  );
}
