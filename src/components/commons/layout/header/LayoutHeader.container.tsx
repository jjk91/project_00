import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LayoutHeader = () => {
  const [open, setOpen] = useState(false);
  return <LayoutHeaderUI open={open} setOpen={setOpen} />;
};
export default LayoutHeader;
