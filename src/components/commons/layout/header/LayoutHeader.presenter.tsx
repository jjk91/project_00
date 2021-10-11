import {
  Wrapper,
  TitleWrapper,
  Title,
  RightTitleWrapper,
  Text,
  Icon,
} from "./LayoutHeader.style";

const LayoutHeaderUI = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title src="/img/logo.png" />
        <RightTitleWrapper>
          <Text>
            <Icon />
            {"A 가공업체"}
          </Text>
          |<Text>{"로그아웃"}</Text>
        </RightTitleWrapper>
      </TitleWrapper>
    </Wrapper>
  );
};
export default LayoutHeaderUI;
