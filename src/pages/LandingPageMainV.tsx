import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";

const LandingPageMainV: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-colors-colors-zinc-950 overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-[25px] box-border leading-[normal] tracking-[normal] gap-[95px] ">
      <img
        className="w-full h-[520px] absolute !m-[0] right-[0px] bottom-[1200px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/backround-1@2x.png"
      />
      <img
        className="w-full h-[520px] absolute !m-[0] right-[0px] bottom-[300px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/sale-2-1@2x.png"
      />
      <section className="w-[1440px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-center text-[76px] text-colors-zinc-50 font-montserrat">
        <img
          className="h-[961.2px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/josephogbonnayatk9yv7t0sukunsplash-1@2x.png"
        />
        <h1 className="!m-[0] w-[994px] absolute top-[290px] left-[calc(50%_-_497px)] text-inherit font-extrabold font-[inherit] whitespace-pre-wrap inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[3] mq450:text-[46px] mq1050:text-[61px]">
          Send money home seamlessly today using SeamlessRemit
        </h1>
      </section>
      <div className="self-stretch h-[960px] relative hidden mix-blend-multiply z-[3]" />
      <img
        className="w-[1200px] relative max-h-full hidden max-w-full z-[4]"
        alt=""
        src="/vector-5.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[295px] box-border max-w-full">
        <header className="w-[1200px] flex flex-row items-end justify-between gap-5 max-w-full">
          <img
            className="h-[51px] w-[316px] relative object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
            <button className="cursor-pointer [border:none] py-2.5 px-[27px] bg-colors-blue-600 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-dodgerblue">
              <a className="[text-decoration:none] relative text-base font-semibold font-montserrat text-colors-zinc-50 text-left inline-block min-w-[104px]">
                Join wait list
              </a>
            </button>
          </div>
        </header>
      </div>
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[130px] pl-[35px] pr-5 box-border max-w-full text-left text-21xl text-colors-zinc-50 font-montserrat">
        <div className="w-[1215px] flex flex-col items-start justify-start gap-10 max-w-full gap-5">
          <h2 className="m-0 w-[793px] relative text-inherit font-bold font-[inherit] inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
            How to send? Easy!
          </h2>
          <div className="self-stretch flex flex-row items-center justify-center gap-[22px] max-w-full text-77xl mq1050:flex-wrap">
            <div className="flex-[0.8571] flex flex-row items-center justify-start py-0 pl-0 pr-[55px] box-border gap-5 min-w-[289px] max-w-full mq450:flex-wrap mq450:pr-5 mq450:box-border mq450:flex-1">
              <b className="w-[103px] relative inline-block [text-shadow:2px_0_0_#fafafa,_0_2px_0_#fafafa,_-2px_0_0_#fafafa,_0_-2px_0_#fafafa] min-w-[103px] mq450:text-10xl mq450:flex-1 mq1050:text-29xl">
                01
              </b>
              <div className="flex-1 relative text-5xl font-medium inline-block min-w-[135px] mq450:text-lgi">
                <p className="m-0">{`Enter `}</p>
                <p className="m-0">phone number</p>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start gap-5 min-w-[295px] max-w-full mq450:flex-wrap">
              <b className="relative inline-block [text-shadow:2px_0_0_#fafafa,_0_2px_0_#fafafa,_-2px_0_0_#fafafa,_0_-2px_0_#fafafa] min-w-[122px] mq450:text-10xl mq450:flex-1 mq1050:text-29xl">
                02
              </b>
              <div className="flex-1 relative text-5xl font-medium inline-block min-w-[86px] mq450:text-lgi">
                <p className="m-0">{`Make `}</p>
                <p className="m-0">payment</p>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start gap-5 min-w-[295px] max-w-full mq450:flex-wrap">
              <b className="relative inline-block [text-shadow:2px_0_0_#fafafa,_0_2px_0_#fafafa,_-2px_0_0_#fafafa,_0_-2px_0_#fafafa] min-w-[122px] mq450:text-10xl mq450:flex-1 mq1050:text-29xl">
                03
              </b>
              <div className="flex-1 relative text-5xl font-medium inline-block min-w-[125px] mq450:text-lgi">
                <p className="m-0">{`Your order `}</p>
                <p className="m-0">is confirmed!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1033px] flex flex-row items-start justify-center pt-0 px-5 pb-[72px] box-border max-w-full text-left text-21xl text-ghostwhite font-poppins mq450:pb-[47px] mq450:box-border">
        <div className="w-[793px] flex flex-col items-start justify-start gap-10 max-w-full gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] z-[1] mq450:text-5xl mq1050:text-13xl">
              Fill your details to join waitlis
            </h2>
            <div className="w-[522px] relative text-5xl font-montserrat inline-block max-w-full z-[1] mq450:text-lgi">
              <p className="m-0 whitespace-pre-wrap">{`Join the wait list today and claim your discout code to send money  free `}</p>
              <p className="m-0">on your first transfer</p>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[22px] px-[77px] bg-colors-zinc-50 rounded-xl overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-17xl font-semibold font-montserrat text-colors-blue-600 text-left">
              Join wait list
            </div>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPageMainV;
