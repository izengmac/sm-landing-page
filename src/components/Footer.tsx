import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-colors-zinc-50 font-poppins ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[54px] max-w-full gap-[27px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24.3px] max-w-full">
          <img
            className="w-[433.7px] relative max-h-full object-cover max-w-full"
            alt=""
            src="/logo-1-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[482px] max-w-full mq750:min-w-full">
            <div className="w-[672px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
              <div className="relative font-semibold mq450:text-lgi">
                Contact us
              </div>
              <div className="relative font-semibold inline-block min-w-[112px] mq450:text-lgi">
                Follow us
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[49px] max-w-full mq750:flex-wrap gap-6">
                <div className="relative inline-block whitespace-nowrap max-w-full mq450:text-lgi">
                  macdanielchimedza@seamlessremit.com
                </div>
                <div className="flex flex-row items-start justify-start gap-4">
                  <img
                    className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icbaselinefacebook.svg"
                  />
                  <img
                    className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/mdiinstagram.svg"
                  />
                  <img
                    className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/ritwitterxfill.svg"
                  />
                </div>
              </div>
              <div className="relative whitespace-nowrap mt-[-6px] mq450:text-lgi">
                +61 435 349 433
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full text-base">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-4.svg"
          />
          <div className="relative inline-block max-w-full">
            <span className="font-medium">©</span>
            <span> 2024 - SeamlessRemit. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
