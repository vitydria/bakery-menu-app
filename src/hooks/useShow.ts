import { useState } from "react";

export const useShow = () => {
  const [hideInfo, setHideInfo] = useState(false);
  const [indexArray, setIndexArray] = useState(-1);

  const showInfo = (value: number): void => {
    setIndexArray(value);
    setHideInfo(true);
  };

  const closeDescription = (): void => {
    setHideInfo(false);
  };

  return {
    hideInfo,
    setHideInfo,
    indexArray,
    setIndexArray,
    showInfo,
    closeDescription,
  };
};
