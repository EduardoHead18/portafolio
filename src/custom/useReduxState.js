import { useSelector } from "react-redux";
export const useReduxState = (parameter) => {
  // code
  const mode = useSelector((state) => state.mode.value);
  return mode;
};
