/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import useChangeData from "../hooks/useChangeData";
import useDeleteData from "../hooks/useDeleteData";
import useMoveData from "../hooks/useMoveData";
import DoubleClickInput from "./DoubleClickInput";
import { FrameObject } from "../@types/objects";

export interface IColumnProps {
  id: number;
  data: Data;
}

const Column: React.FunctionComponent<IColumnProps> = (props) => {
  const [changeData] = useChangeData();
  const [removeData] = useDeleteData();
  const [upTheData, downTheData] = useMoveData();
  const [lat, setLat] = useState<string>(props.data.lat.toString());
  const [lng, setLng] = useState<string>(props.data.long.toString());
  const [alt, setAlt] = useState<string>(props.data.alt.toString());
  const [frameType, setFrameType] = useState<String>(props.data.frame);

  console.log(FrameObject[frameType as keyof FrameObjectType]);
  useEffect(() => {
    let gotData: Data = {
      ...props.data,
      long: lng,
      lat,
      alt,
    };
    changeData(props.id, gotData);
  }, [lat, lng, alt]);
  useEffect(() => {
    setLat(props.data.lat.toString());
    setLng(props.data.long.toString());
    setAlt(props.data.alt.toString());
  }, [props.data]);
  return (
    <tr>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.id}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.command}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p1}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p2}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p3}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.p4}
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <DoubleClickInput
          fixValues={() => setLat(String(Number(lat).toFixed(8)))}
          val={lat}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setLat(e.currentTarget.value);
          }}
        />
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <DoubleClickInput
          fixValues={() => setLng(String(Number(lng).toFixed(8)))}
          val={lng}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setLng(e.currentTarget.value);
          }}
        />
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <DoubleClickInput
          fixValues={() => setAlt(String(Number(alt).toFixed(6)))}
          val={alt}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setAlt(e.currentTarget.value);
          }}
        />
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        {props.data.frame}
      </td>
      <td
        className="
        text-center
        p-2 h-12
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
        p-2 h-12
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
        p-2 h-12
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
