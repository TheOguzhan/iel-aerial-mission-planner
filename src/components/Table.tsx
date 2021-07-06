import * as React from "react";
import { useTableState } from "../hooks";
import Column from "./Column";
interface ITableProps {
  marks: Array<Data>;
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
  const [tableState] = useTableState();
  
  return (
    <table className="table-fixed mx-auto border-separate border dark:border-green-800 border-blue-800   dark:text-white text-dark">
      <thead>
        <tr>
          <th className="w-4 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            #
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Command
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState.p1}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState.p2}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState.p3}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState.p4}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState?.latName}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState?.longName}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            {tableState?.altRequired ? "Altitude" : ""}
          </th>
          <th className="w-32 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Frame
          </th>
          <th className="w-16 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Delete
          </th>
          <th className="w-16 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Up
          </th>
          <th className="w-16 dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Down
          </th>
        </tr>
      </thead>
      <tbody>
        {props.marks.map((element, index) => (
          <Column id={index} data={element} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
