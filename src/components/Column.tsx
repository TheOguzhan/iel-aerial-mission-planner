import * as React from "react";
import useDeleteData from "../hooks/useDeleteData";
import useMoveData from "../hooks/useMoveData";

export interface IColumnProps {
  id: number;
  data: Data;
}

const Column: React.FunctionComponent<IColumnProps> = (props) => {
  const [removeData] = useDeleteData();
  const [upTheData, downTheData] = useMoveData();
  return (
    <tr>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.id}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.command}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p1}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p2}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p3}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p4}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.lat}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.long}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.alt}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.frame}
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <button
          className="
          w-full text-center
          mx-auto p-2 rounded-lg
        dark:border-green-500  dark:bg-green-400
        border-blue-400 bg-blue-300 
          delay-100 duration-300 ease-in-out
        dark:hover:bg-green-300 hover:bg-blue-200"
          onClick={(e) => {
            removeData(props.data);
          }}
        >
          X
        </button>
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <button
          className="
          w-full text-center
          mx-auto p-2 rounded-lg
        dark:border-green-500  dark:bg-green-400
        border-blue-400 bg-blue-300 
          delay-100 duration-300 ease-in-out
        dark:hover:bg-green-300 hover:bg-blue-200"
          onClick={(e) => {
            upTheData(props.data);
          }}
        >
          Up
        </button>
      </td>
      <td
        className="
        text-center
        p-2
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <button
          className="
          w-full text-center
          mx-auto p-2 rounded-lg
        dark:border-green-500  dark:bg-green-400
        border-blue-400 bg-blue-300 
          delay-100 duration-300 ease-in-out
        dark:hover:bg-green-300 hover:bg-blue-200"
          onClick={(e) => {
            downTheData(props.data);
          }}
        >
          Down
        </button>
      </td>
    </tr>
  );
};

export default Column;
