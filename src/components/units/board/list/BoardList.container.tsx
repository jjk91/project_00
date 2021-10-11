import { useState, ChangeEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import { SelectChangeEvent } from "@mui/material/Select";
import requests from "../../../../../requests.json";

const BoardList = () => {
  const ITEM_HEIGHT = 45;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 130,
      },
    },
  };
  const process = ["밀링", "선반"];
  const material = [
    "알루미늄",
    "탄소강",
    "구리",
    "합금강",
    "강철",
    "스테인리스강",
  ];
  const [processName, setProcessName] = useState<string[]>([]);
  const [materialName, setMaterialName] = useState<string[]>([]);

  const onChangeProcess = (event: SelectChangeEvent<typeof processName>) => {
    const {
      target: { value },
    } = event;
    setProcessName(typeof value === "string" ? value.split(",") : value);
  };

  const onChangeMaterial = (event: SelectChangeEvent<typeof materialName>) => {
    const {
      target: { value },
    } = event;
    setMaterialName(typeof value === "string" ? value.split(",") : value);
  };

  const [checked, setChecked] = useState(false);

  const onChangeState = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onClickinitialization = () => {
    setProcessName([]);
    setMaterialName([]);
  };

  return (
    <BoardListUI
      onChangeProcess={onChangeProcess}
      onChangeMaterial={onChangeMaterial}
      process={process}
      material={material}
      processName={processName}
      materialName={materialName}
      MenuProps={MenuProps}
      info={requests}
      onChangeState={onChangeState}
      checked={checked}
      onClickinitialization={onClickinitialization}
    />
  );
};
export default BoardList;
