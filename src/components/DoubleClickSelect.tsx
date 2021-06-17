import React from "react";

interface IDoubleClickSelectProps {
  options: String[];
  val: String;
  disabled?: boolean;
  onChange: Function;
  large?: boolean;
}

export const DoubleClickSelect: React.FunctionComponent<IDoubleClickSelectProps> =
  (props) => {
    const [select, setSelect] = React.useState<String>(props.val);
    const [edit, setEdit] = React.useState<boolean>(false);
    return (
      <>
        <div className="mt-1 mx-auto relative">
          <span
            className="flex items-center  select-none cursor-pointer dark:text-white text-black"
            onClick={(e) => setEdit(!edit)}
            data-testid="val-displayer"
          >
            {select}
          </span>
        </div>
        <ul
          className={`absolute z-10 mt-1 ${
            props.large ? "w-56" : "w-28"
          }  mx-auto bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          style={{ display: edit && !props.disabled ? "block" : "none" }}
          onBlur={(e) => {
            setEdit(false);
          }}
          data-testid="main-select"
        >
          {props.options.map((element, index) => {
            return (
              <li
                className="text-gray-900  cursor-pointer select-none relative py-2 pl-2 pr-2 hover:bg-gray-200"
                id={`list-box-option-${index}`}
                role="option"
                aria-selected={select === element}
                onClick={() => {
                  setSelect(element);
                  props.onChange(element);
                  setEdit(false);
                }}
                key={index}
                data-testid="option"
              >
                <div className="flex items-items">
                  <span className="text-black text-font-normal ml-3 block truncate text-center">
                    {element}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

DoubleClickSelect.defaultProps = {
  disabled: false,
  large: false,
};
