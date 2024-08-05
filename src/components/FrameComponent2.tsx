import { FunctionComponent } from "react";
import InputField from "./InputField";
import Button from "./Button";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row justify-center pt-0 px-5 pb-12 box-border max-w-full text-left text-21xl text-colors-zinc-50 font-montserrat mq450:pb-[31px] mq450:box-border  ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-start justify-between  max-w-full gap-5 mq1050:flex-wrap mq1050:justify-center">
        <h2 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq450:text-5xl mq1050:text-13xl">
          Join wait list
        </h2>
        <div className="w-[522px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full">
          <form className="m-0 self-stretch flex flex-col items-end justify-start gap-12 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
              <InputField
                propFilter="unset"
                label="Name"
                placeholderPlaceholder="Name"
              />
              <InputField
                propFilter="drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5))"
                label="E-mail"
                placeholderPlaceholder="E-mail"
              />
              <InputField
                label="Phone number"
                placeholderPlaceholder="Phone number"
              />
            </div>
            <Button />
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
