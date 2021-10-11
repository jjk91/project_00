import {
  Wrapper,
  TitleWrapper,
  TitleMenu,
  Title,
  RightTitleWrapper,
  Text,
  Icon,
} from "./LayoutHeader.style";

const LayoutHeaderUI = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleMenu onClick={() => props.setOpen(!open)} />

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
