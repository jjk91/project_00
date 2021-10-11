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
  SwitchWrapper,
  SwitchFormControlLabel,
  BodyWrapper,
  BoardWrapper,
  BoardLeft,
  BoardLeftTop,
  BoardTitle,
  BoardClient,
  BoardLeftBottom,
  BoardDue,
  BoardRight,
  BoardHeader,
  BoardBody,
  TextTitleWrapper,
  Text,
  ItemWrapper,
  BoardFooter,
  BoardPlanAmount,
  BoardAmount,
  MethodMap,
  BoardMethod,
  MaterialMap,
  BoardMaterial,
  BoardStatus,
  ListRequest,
  Chatting,
} from "./BoardList.style";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import { SelectChangeEvent } from "@mui/material/Select";
import { MenuProps } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface IBoardListUIProps {
  info: any;
  onChangeState: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  checked: boolean;
  precess: string[];
  material: string[];
  processName: string[];
  materialName: string[];
  MenuProps: Partial<MenuProps>;
  onChangeProcess: (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => void;
  onChangeMaterial: (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => void;
}
interface Idata {
  id?: number;
  title: string;
  client: String;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

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
              {props.precess.map((name) => (
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
        {props.info.requests.map((data: Idata, index: number) =>
          (props.processName.filter((el) => data.method.includes(el)).length ||
            props.materialName.filter((el) => data.material.includes(el))
              .length) &&
          !props.checked ? (
            <BoardWrapper key={index}>
              {console.log(props.precess)}
              <BoardHeader>
                <BoardLeft>
                  <BoardLeftTop>
                    <BoardTitle>{data.title}</BoardTitle>
                    <BoardClient>{data.client}</BoardClient>
                  </BoardLeftTop>
                  <BoardLeftBottom>
                    <BoardDue>{`${data.due}까지 납기`}</BoardDue>
                  </BoardLeftBottom>
                </BoardLeft>
                <BoardRight>
                  {data.status === "상담중" ? (
                    <BoardStatus>{data.status}</BoardStatus>
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
                  <BoardPlanAmount>{`${data.count}개`}</BoardPlanAmount>
                  <BoardAmount>{`${data.amount}개`}</BoardAmount>
                  <MethodMap>
                    {data.method.map((method, index: number) => (
                      <BoardMethod key={index}>{method}</BoardMethod>
                    ))}
                  </MethodMap>
                  <MaterialMap>
                    {data.material.map((material, index: number) => (
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
          ) : (
            (props.processName.filter((el) => data.method.includes(el))
              .length ||
              props.materialName.filter((el) => data.material.includes(el))
                .length) &&
            data.status === "상담중" && (
              <BoardWrapper key={index}>
                <BoardHeader>
                  <BoardLeft>
                    <BoardLeftTop>
                      <BoardTitle>{data.title}</BoardTitle>
                      <BoardClient>{data.client}</BoardClient>
                    </BoardLeftTop>
                    <BoardLeftBottom>
                      <BoardDue>{`${data.due}까지 납기`}</BoardDue>
                    </BoardLeftBottom>
                  </BoardLeft>
                  <BoardRight>
                    {data.status === "상담중" ? (
                      <BoardStatus>{data.status}</BoardStatus>
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
                    <BoardPlanAmount>{`${data.count}개`}</BoardPlanAmount>
                    <BoardAmount>{`${data.amount}개`}</BoardAmount>
                    <MethodMap>
                      {data.method.map((method, index: number) => (
                        <BoardMethod key={index}>{method}</BoardMethod>
                      ))}
                    </MethodMap>
                    <MaterialMap>
                      {data.material.map((material, index: number) => (
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
            )
          )
        )}
      </BodyWrapper>
    </Wrapper>
  );
};
export default BoardListUI;
