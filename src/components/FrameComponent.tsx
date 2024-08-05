import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-9xl text-colors-zinc-50 font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[134px] pb-0 pl-[527px] pr-[459px] box-border relative gap-[60px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[263px] mq750:pt-[87px] mq750:pr-[229px] mq750:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(9,_9,_11,_0),_#09090b)] z-[1]" />
        <div className="flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
          <div className="relative font-medium z-[3] mq450:text-3xl">
            <p className="m-0">
              <span className="text-yellowgreen">✓</span>
              <span> Secure and safe</span>
            </p>
            <p className="m-0">
              <span className="text-yellowgreen">✓</span>
              <span> Anywhere, anytime</span>
            </p>
            <p className="m-0">
              <span className="text-yellowgreen">✓</span>
              <span> Less than 5 minutes</span>
            </p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[21px] px-[77px] bg-colors-blue-600 rounded-xl overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[3] hover:bg-dodgerblue mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-17xl font-semibold font-montserrat text-colors-zinc-50 text-left">
            Join wait list
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-end text-21xl">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0">
              <div className="relative font-semibold inline-block min-w-[70px] z-[3] mq450:text-5xl mq1050:text-13xl">
                100
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
              <h2 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[24px] z-[4] mq450:text-5xl mq1050:text-13xl">{`+ `}</h2>
            </div>
            <div className="flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0">
              <h2 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[111px] z-[3] mq450:text-5xl mq1050:text-13xl">
                users
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1176px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-64.5px]">
        <div className="flex flex-row items-start justify-start z-[3]">
          <img
            className="h-20 w-20 relative rounded-781xl overflow-hidden shrink-0 object-contain min-h-[80px]"
            alt=""
            src="/picture@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-781xl overflow-hidden shrink-0 object-cover min-h-[80px] z-[1] ml-[-20px]"
            alt=""
            src="/picture-1@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-781xl overflow-hidden shrink-0 object-cover min-h-[80px] z-[2] ml-[-20px]"
            alt=""
            src="/picture-2@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-781xl overflow-hidden shrink-0 object-cover min-h-[80px] z-[3] ml-[-20px]"
            alt=""
            src="/picture-3@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-781xl overflow-hidden shrink-0 object-cover min-h-[80px] z-[4] ml-[-20px]"
            alt=""
            src="/picture-4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
