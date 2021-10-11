import styled from "@emotion/styled";
import { ShopOutlined } from "@ant-design/icons";
import MenuIcon from "@mui/icons-material/Menu";

export const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #1565c0;
  @media screen and (max-width: 480px) {
    height: 44px;
  } ;
`;

export const TitleWrapper = styled.div`
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const TitleMenu = styled(MenuIcon)`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    color: white;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const Title = styled.img`
  width: 153px;
  height: 20px;
  @media screen and (max-width: 480px) {
    width: 92px;
    height: 12px;
  }
`;

export const RightTitleWrapper = styled.div`
  width: 210px;
  font-size: 14px;
  line-height: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const Icon = styled(ShopOutlined)`
  margin-right: 10px;
`;
export const Text = styled.div``;
