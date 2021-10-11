import {
  BoardWrapper,
  BoardHeader,
  BoardLeft,
  BoardLeftTop,
  BoardTitle,
  BoardClient,
  BoardLeftBottom,
  BoardDue,
  BoardRight,
  BoardStatus,
  BoardBody,
  TextTitleWrapper,
  Text,
  ItemWrapper,
  BoardPlanAmount,
  BoardAmount,
  MethodMap,
  BoardMethod,
  MaterialMap,
  BoardMaterial,
  BoardFooter,
  ListRequest,
  Chatting,
} from "./BoardCard.style";

interface IboardCardUIProps {
  data: any;
}

const BoardCardUI = (props: IboardCardUIProps) => {
  return (
    <BoardWrapper>
      <BoardHeader>
        <BoardLeft>
          <BoardLeftTop>
            <BoardTitle>{props.data.title}</BoardTitle>
            <BoardClient>{props.data.client}</BoardClient>
          </BoardLeftTop>
          <BoardLeftBottom>
            <BoardDue>{`${props.data.due}까지 납기`}</BoardDue>
          </BoardLeftBottom>
        </BoardLeft>
        <BoardRight>
          {props.data.status === "상담중" ? (
            <BoardStatus>{props.data.status}</BoardStatus>
          ) : (
            ""
          )}
        </BoardRight>
      </BoardHeader>
      <BoardBody>
        <TextTitleWrapper>
          <Text>도면개수</Text>
          <Text>총 수량</Text>
          <Text>가공방식</Text>
          <Text>재료</Text>
        </TextTitleWrapper>
        <ItemWrapper>
          <BoardPlanAmount>{`${props.data.count}개`}</BoardPlanAmount>
          <BoardAmount>{`${props.data.amount}개`}</BoardAmount>
          <MethodMap>
            {props.data.method.map((method: string[], index: number) => (
              <BoardMethod key={index}>{method}</BoardMethod>
            ))}
          </MethodMap>
          <MaterialMap>
            {props.data.material.map((material: string[], index: number) => (
              <BoardMaterial key={index}>{material}</BoardMaterial>
            ))}
          </MaterialMap>
        </ItemWrapper>
      </BoardBody>
      <BoardFooter>
        <ListRequest variant="contained">요청내역 보기</ListRequest>
        <Chatting variant="outlined">채팅하기</Chatting>
      </BoardFooter>
    </BoardWrapper>
  );
};
export default BoardCardUI;
