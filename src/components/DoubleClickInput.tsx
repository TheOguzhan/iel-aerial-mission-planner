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
      <div
        data-testid="val-displayer"
        style={{ display: !edit || props.disabled ? "block" : "none" }}
      >
        <h2 onDoubleClick={(e) => setEdit(true)} data-testid="doubleClicker">{props.val}</h2>
      </div>
      <input
        data-testid="val-input"
        style={{ display: edit && !props.disabled ? "block" : "none" }}
        className="border rounded-lg p-2  w-28 dark:border-green-600 dark:bg-green-500 border-blue-500 bg-blue-400 dark:text-white text-dark"
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
  disabled: false,
};

export default DoubleClickInput;
