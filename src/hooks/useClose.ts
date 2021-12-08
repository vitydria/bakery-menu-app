import { useState } from "react";

export const useClose = () => {
  const [closeInfo, setCloseInfo] = useState(true);
  return { closeInfo, setCloseInfo };
};
