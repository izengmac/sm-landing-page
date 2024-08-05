import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[10.5px] px-[74px] bg-colors-zinc-50 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro ${className}`}
    >
      <div className="relative text-5xl font-semibold font-montserrat text-colors-blue-600 text-left inline-block min-w-[52px]">{`Join `}</div>
    </button>
  );
};

export default Button;
