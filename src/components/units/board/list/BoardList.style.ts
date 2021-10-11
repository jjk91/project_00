import styled from "@emotion/styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
`;
export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const SelectWrapper = styled.div`
  @media (max-width: 480px) {
    padding-bottom: 32px;
  }
`;

export const Process = styled(FormControl)`
  width: 110px;
  margin-right: 10px;
`;

export const ProcessLabel = styled(InputLabel)``;

export const ProcessSelect = styled(Select)`
  font-size: 12px;
`;

export const ProcessOutlinedInput = styled(OutlinedInput)``;

export const Material = styled(FormControl)`
  width: 90px;
`;

export const MaterialLabel = styled(InputLabel)``;

export const MaterialSelect = styled(Select)``;

export const MaterialOutlinedInput = styled(OutlinedInput)`
  font-size: 12px;
`;

export const SwitchWrapper = styled(FormGroup)``;

export const SwitchFormControlLabel = styled(FormControlLabel)`
  font-size: 14px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  grid-gap: 16px;
`;

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

export const BoardFooter = styled.div``;

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

export const BoardStatus = styled.div`
  width: 50px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
`;

export const FooterWapper = styled.div``;

export const ListRequest = styled(Button)`
  margin-right: 7px;
`;

export const Chatting = styled(Button)``;
