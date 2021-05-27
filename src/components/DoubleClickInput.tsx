import * as React from "react";

interface DoubleClickInputProps {
  onChange: React.FormEventHandler<HTMLInputElement>;
  disabled?: boolean;
  val: string;
}

const DoubleClickInput: React.FunctionComponent<DoubleClickInputProps> = (
  props: DoubleClickInputProps
) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  return (
    <>
      <div style={{ display: !edit ? "block" : "none" }}>
        <h2 onDoubleClick={(e) => setEdit(true)}>{props.val}</h2>
      </div>
      <input
        style={{ display: edit ? "block" : "none" }}
        className="border rounded-lg
        py-2 px-3 
        text-black 
        focus:ring-gray-400 focus:ring-2"
        value={props.val}
        onChange={props.onChange}
        onBlur={(e) => setEdit(false)}
        onDoubleClick={(e) => setEdit(false)}
      />
    </>
  );
};

DoubleClickInput.defaultProps = {
  disabled: true,
};

export default DoubleClickInput;
