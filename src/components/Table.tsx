import * as React from "react";
import Data from "../@types/data";
import Column from "./Column";
interface ITableProps {
  marks: Data[];
}

const Table: React.FunctionComponent<ITableProps> = (props) => {
  return (
    <table className="table-fixed mx-auto border-separate border dark:border-green-800 border-blue-800 my-8 dark:text-white text-dark">
      <thead>
        <tr>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            #
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Command
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            p1
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            p2
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            p3
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            p4
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Lat
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Long
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Alt
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Frame
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Delete
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
            Up
          </th>
          <th className=" dark:border-green-600 dark:bg-green-600 p-2 border-blue-500 bg-blue-500">
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
