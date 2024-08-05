import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputField1 from "./InputField1";

export type InputFieldType = {
  className?: string;
  label?: string;
  placeholderPlaceholder?: string;

  /** Style props */
  propFilter?: CSSProperties["filter"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  propFilter,
  label,
  placeholderPlaceholder,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      filter: propFilter,
    };
  }, [propFilter]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full z-[1] text-left text-base text-colors-zinc-50 font-montserrat ${className}`}
      style={inputFieldStyle}
    >
      <InputField1
        label={label}
        placeholderPlaceholder={placeholderPlaceholder}
      />
    </div>
  );
};

export default InputField;
