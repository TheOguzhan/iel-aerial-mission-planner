/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import useChangeData from "../hooks/useChangeData";
import useDeleteData from "../hooks/useDeleteData";
import useMoveData from "../hooks/useMoveData";
import DoubleClickInput from "./DoubleClickInput";
import { FrameArray } from "../objects/objects";
import { DoubleClickSelect } from "./DoubleClickSelect";
import { CommandArray } from "../objects/objects";
import { useChangeTableState } from "../hooks";
import { COMMAND_TYPE_OBJECT_ARRAY } from "../objects/objects";
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
  const [command, setCommand] = useState<String>(props.data.command);
  const [p1, setP1] = useState<String>(props.data.p1);
  const [p2, setP2] = useState<String>(props.data.p2);
  const [p3, setP3] = useState<String>(props.data.p3);
  const [p4, setP4] = useState<String>(props.data.p4);
  const [changeTableState] = useChangeTableState();
  useEffect(() => {
    let gotData: Data = {
      ...props.data,
      long: lng,
      lat,
      alt,
      frame: frameType,
      command,
      p1,
      p2,
      p3,
      p4,
    };
    changeData(props.id, gotData);
  }, [lat, lng, alt, frameType, command, p1]);
  useEffect(() => {
    setLat(props.data.lat.toString());
    setLng(props.data.long.toString());
    setAlt(props.data.alt.toString());
    setFrameType(props.data.frame);
    setCommand(props.data.command);
    setP1(props.data.p1);
    setP2(props.data.p2);
    setP3(props.data.p3);
    setP4(props.data.p4);
  }, [props.data]);
  useEffect(() => {
    changeTableState(command.toString());
  }, [command, props.data.command]);
  return (
    <tr
      onClick={(e: React.MouseEvent<HTMLTableRowElement>) => {
        changeTableState(command.toString());
      }}
    >
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
        <DoubleClickSelect
          options={CommandArray}
          val={props.data.command}
          onChange={(element: String) => {
            if (element === "LAND") {
              setAlt(String((0).toFixed(8)));
            }
            setCommand(element);
          }}
          large={true}
          disabled={props.data.command === "HOME"}
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
          fixValues={() => setP1(String(Number(p1).toFixed(8)))}
          val={p1.toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setP1(e.currentTarget.value);
          }}
          disabled={!COMMAND_TYPE_OBJECT_ARRAY[command.toString()].p1}
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
          fixValues={() => setP2(String(Number(p2).toFixed(8)))}
          val={p2.toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setP2(e.currentTarget.value);
          }}
          disabled={!COMMAND_TYPE_OBJECT_ARRAY[command.toString()].p2}
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
          fixValues={() => setP3(String(Number(p3).toFixed(8)))}
          val={p3.toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setP3(e.currentTarget.value);
          }}
          disabled={!COMMAND_TYPE_OBJECT_ARRAY[command.toString()].p3}
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
          fixValues={() => setP4(String(Number(p4).toFixed(8)))}
          val={p4.toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setP4(e.currentTarget.value);
          }}
          disabled={!COMMAND_TYPE_OBJECT_ARRAY[command.toString()].p4}
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
          fixValues={() => setLat(String(Number(lat).toFixed(8)))}
          val={lat}
          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
            setLat(e.currentTarget.value);
          }}
          disabled={
            !COMMAND_TYPE_OBJECT_ARRAY[command.toString()].latRequired &&
            !COMMAND_TYPE_OBJECT_ARRAY[command.toString()].latModified
          }
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
          disabled={
            !COMMAND_TYPE_OBJECT_ARRAY[command.toString()].longRequired &&
            !COMMAND_TYPE_OBJECT_ARRAY[command.toString()].longModified
          }
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
          disabled={!COMMAND_TYPE_OBJECT_ARRAY[command.toString()].altRequired}
        />
      </td>
      <td
        className="
        text-center
        p-2 h-12
      dark:border-green-600 dark:bg-green-500
      border-blue-500 bg-blue-400"
      >
        <DoubleClickSelect
          options={FrameArray}
          val={props.data.frame}
          onChange={(element: String) => {
            setFrameType(element);
          }}
          disabled={props.data.command === "HOME"}
        />
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
          disabled={props.data.command === "HOME"}
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
          disabled={props.data.command === "HOME"}
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
          disabled={props.data.command === "HOME"}
        >
          Down
        </button>
      </td>
    </tr>
  );
};

export default Column;
