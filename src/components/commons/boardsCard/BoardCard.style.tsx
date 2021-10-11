import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px #e5e5e5 solid;
  height: 132px;
  width: 100%;
`;

export const BoardLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoardLeftTop = styled.div``;

export const BoardTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

export const BoardClient = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

export const BoardLeftBottom = styled.div``;

export const BoardDue = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
`;

export const BoardRight = styled.div``;

export const BoardStatus = styled.div`
  width: 50px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
`;

export const BoardBody = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
`;

export const TextTitleWrapper = styled.div`
  width: 70px;
  margin: 4px 32px 4px 0;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

export const ItemWrapper = styled.div`
  margin: 4px 0;
`;

export const BoardPlanAmount = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const BoardAmount = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const MethodMap = styled.div`
  display: flex;
`;

export const BoardMethod = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

export const MaterialMap = styled.div`
  display: flex;
`;

export const BoardMaterial = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

export const BoardFooter = styled.div``;

export const ListRequest = styled(Button)`
  margin-right: 7px;
`;

export const Chatting = styled(Button)``;
