import LayoutHeader from "./header/LayoutHeader.container";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 155px 60px 155px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 24px 20px 20px 20px;
  }
`;

const Layout = (props: any) => {
  return (
    <>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </>
  );
};
export default Layout;
