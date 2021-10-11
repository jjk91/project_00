import styled from "@emotion/styled";
import { ShopOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #1565c0;
`;

export const TitleWrapper = styled.div`
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.img`
  width: 153px;
  height: 20px;
`;

export const RightTitleWrapper = styled.div`
  width: 210px;
  font-size: 14px;
  line-height: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
  }
`;
export const Icon = styled(ShopOutlined)`
  margin-right: 10px;
`;
export const Text = styled.div``;
