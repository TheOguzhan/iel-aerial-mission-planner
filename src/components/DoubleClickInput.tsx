import * as React from "react";

interface DoubleClickInputProps {
  onChange: React.FormEventHandler<HTMLInputElement>;
  val: string;
  fixValues: Function;
  disabled?: boolean;
}

const DoubleClickInput: React.FunctionComponent<DoubleClickInputProps> = (
  props: DoubleClickInputProps
) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  return (
    <>
      <div style={{ display: !edit || props.disabled ? "block" : "none" }}>
        <h2 onDoubleClick={(e) => setEdit(true)}>{props.val}</h2>
      </div>
      <input
        style={{ display: edit && !props.disabled ? "block" : "none" }}
        className="border rounded-lg
        py-2 px-2 
        text-black 
        focus:ring-gray-400 focus:ring-2
        w-28"
        value={props.val}
        onChange={props.onChange}
        onBlur={(e) => {
          setEdit(false);
          props.fixValues();
        }}
        onDoubleClick={(e) => {
          setEdit(false);
          props.fixValues();
        }}
      />
    </>
  );
};

DoubleClickInput.defaultProps = {
  disabled: false
}

export default DoubleClickInput;
