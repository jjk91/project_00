import { SelectChangeEvent } from "@mui/material/Select";
import { MenuProps } from "@mui/material";
import { ChangeEvent, MouseEvent, ReactNode } from "react";

export interface IBoardListUIProps {
  info: any;
  onChangeState: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  checked: boolean;
  process: string[];
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
  onClickinitialization: (event: MouseEvent<HTMLDivElement>) => void;
}
export interface Idata {
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
