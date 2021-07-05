import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function useTableState() {
    let state = useSelector<RootState, RootState["stateReducer"]["state"]>(
        (state) => state.stateReducer.state
    );
    return [state] as const;
}