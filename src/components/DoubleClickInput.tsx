import * as React from "react";
import useData from "../hooks/useData";

interface DoubleClickInputProps {
  data: Data;
  disabled?: boolean;
  val: String;
}



const DoubleClickInput: React.FunctionComponent<DoubleClickInputProps> = (
  props: DoubleClickInputProps
) => {
  //const [data, _] = useData();
  //const [initialValue, setInitialValue] = React.useState<string>();
  //const [key, setKey] = React.useState<Array<String>>([]);
  //setKey(
  //  Object.keys(props.data).filter((gotKey: String) => props.data[gotKey] === props.val)
  //);

  return <div>asd</div>;
};

DoubleClickInput.defaultProps = {
  disabled: true,
};

export default DoubleClickInput;
