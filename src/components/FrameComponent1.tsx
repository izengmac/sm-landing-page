import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[109px] box-border max-w-full text-left text-21xl text-colors-zinc-50 font-montserrat ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start  max-w-full gap-[25px]">
        <h2 className="m-0 w-[793px] relative text-inherit font-bold font-[inherit] inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
          Sending money is easier than ever
        </h2>
        <div className="self-stretch flex flex-col items-end justify-star max-w-full text-5xl gap-[15px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
          <div className="flex flex-row items-start justify-start max-w-full lg:flex-wrap gap-[23px]">
            <div className="flex flex-row items-start justify-start max-w-full gap-5 mq1050:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[70px] h-[70px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/arcticonspriceconverter.svg"
                />
              </div>
              <div className="w-64 flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border">
                <div className="self-stretch relative mq450:text-lgi">
                  Send money with our favourable rates
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[70px] h-[70px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/pepiconspencileartheurope.svg"
                />
              </div>
              <div className="w-[251px] relative inline-block shrink-0 mq450:text-lgi">
                <p className="m-0">Send any time,</p>
                <p className="m-0">from anywhere</p>
              </div>
            </div>
            <div className="w-[361px] flex flex-row items-start justify-start gap-10 max-w-full mq450:flex-wrap gap-5">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[70px] h-[70px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconparkoutlinepeoplesafeone.svg"
                />
              </div>
              <div className="flex-1 relative inline-block min-w-[163px] mq450:text-lgi">
                Your privacy remains protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
