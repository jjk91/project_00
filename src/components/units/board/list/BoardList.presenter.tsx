import {
  Wrapper,
  TitleWrapper,
  Title,
  SubTitle,
  MiddleWrapper,
  SelectWrapper,
  Process,
  ProcessLabel,
  ProcessSelect,
  ProcessOutlinedInput,
  Material,
  MaterialLabel,
  MaterialSelect,
  MaterialOutlinedInput,
  InitializationButton,
  InitializationIcon,
  Initialization,
  SwitchWrapper,
  SwitchFormControlLabel,
  BodyWrapper,
} from "./BoardList.style";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import BoardCard from "../../../commons/boardsCard/BoardCard.container";
import { IBoardListUIProps, Idata } from "./BoardList.types";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>들어온 요청</Title>
        <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
      </TitleWrapper>
      <MiddleWrapper>
        <SelectWrapper>
          <Process>
            <ProcessLabel id="process-checkbox-label">가공방식</ProcessLabel>
            <ProcessSelect
              labelId="process-checkbox-label"
              id="process-multiple-checkbox"
              multiple
              value={props.processName}
              onChange={props.onChangeProcess}
              input={<ProcessOutlinedInput label="가공방식" />}
              renderValue={(selected: string) => {
                return `가공방식(${selected.length})`;
              }}
              MenuProps={props.MenuProps}
            >
              {props.process.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={props.processName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </ProcessSelect>
          </Process>
          <Material>
            <MaterialLabel id="Material-checkbox-label">재료</MaterialLabel>
            <MaterialSelect
              labelId="Material-checkbox-label"
              id="Material-multiple-checkbox"
              multiple
              value={props.materialName}
              onChange={props.onChangeMaterial}
              input={<MaterialOutlinedInput label="재료" />}
              renderValue={(selected: string) => {
                return `재료(${selected.length})`;
              }}
              MenuProps={props.MenuProps}
            >
              {props.material.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={props.materialName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </MaterialSelect>
          </Material>
          <InitializationButton onClick={props.onClickinitialization}>
            <InitializationIcon src="/img/refresh_24px.png" />
            <Initialization>필터링 리셋</Initialization>
          </InitializationButton>
        </SelectWrapper>

        <SwitchWrapper>
          <SwitchFormControlLabel
            control={
              <Switch checked={props.checked} onChange={props.onChangeState} />
            }
            label="상담 중인 요청만 보기"
          />
        </SwitchWrapper>
      </MiddleWrapper>
      <BodyWrapper>
        {props.info.requests.map((data: Idata, index: number) => {
          if (
            props.processName.length === 0 &&
            props.materialName.length === 0
          ) {
            return (
              <>
                {props.checked === false ? (
                  <BoardCard data={data} key={index} />
                ) : (
                  data.status === "상담중" && (
                    <BoardCard data={data} key={index} />
                  )
                )}
              </>
            );
          }
          if (!props.checked) {
            if (
              props.processName.filter((el) => data.method.includes(el))
                .length ||
              props.materialName.filter((el) => data.material.includes(el))
                .length
            ) {
              return <BoardCard data={data} key={index} />;
            }
          }
          if (data.status === "상담중") {
            if (
              props.processName.filter((el) => data.method.includes(el))
                .length ||
              props.materialName.filter((el) => data.material.includes(el))
                .length
            ) {
              return <BoardCard data={data} key={index} />;
            }
          }
        })}
      </BodyWrapper>
    </Wrapper>
  );
};
export default BoardListUI;
