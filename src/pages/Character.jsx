import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Character = () => {
  const location = useLocation();
  const char = location.state;

  useEffect(() => {
    console.log(char);
  }, [char]);
  return <></>;
};
