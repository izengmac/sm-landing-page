import { FunctionComponent } from "react";

export type InputField1Type = {
  className?: string;
  label?: string;
  placeholderPlaceholder?: string;
};

const InputField1: FunctionComponent<InputField1Type> = ({
  className = "",
  label,
  placeholderPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-left text-base text-colors-zinc-50 font-montserrat ${className}`}
    >
      <div className="self-stretch relative leading-[20px] font-medium">
        {label}
      </div>
      <div className="self-stretch rounded-xl bg-colors-blue-600 border-colors-zinc-50 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[11px] px-2.5 max-w-full">
        <input
          className="w-full [border:none] [outline:none] font-text-base-normal text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-colors-zinc-50 text-left inline-block min-w-[250px] max-w-full p-0"
          placeholder={placeholderPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputField1;
