import { useSelector } from "react-redux";
//Function to return the status in redux to avoid importing the useSelector so many times
export function constStateRedux(){
    const mode = useSelector(state=>state.mode.value)
    return mode
}