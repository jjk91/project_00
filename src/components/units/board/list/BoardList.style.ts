import styled from "@emotion/styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  display: flex;
  /* flex-direction: row; */
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
  margin-right: 24px;
`;

export const MaterialLabel = styled(InputLabel)``;

export const MaterialSelect = styled(Select)``;

export const MaterialOutlinedInput = styled(OutlinedInput)`
  font-size: 12px;
`;
export const InitializationButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  color: #2196f3;
  cursor: pointer;
`;
export const InitializationIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;
export const Initialization = styled.div``;
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
