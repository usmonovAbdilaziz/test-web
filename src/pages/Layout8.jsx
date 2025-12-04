import bgImage from "../image-8L/imgBg.png";
import bgImg3 from "../image-8L/Background (3).png";
import icon1 from "../image-8L/icon.1.png";
import icon2 from "../image-8L/icon.2.png";
import icon3 from "../image-8L/icon.3.png";
import twitter from "../icons/Twitter.png";
import telegram from "../icons/Telegram.png";
import instagram from "../icons/Instagram.png";
import coingeko from "../icons/CoinGecko.png";
import coinmarketcap from "../icons/CoinMarketCap.png";
import line from "../image-8L/line.png";
import phone from "../image-8L/phone.png";

function Layout8() {
  return (
    <div
      className="flex flex-col w-full  h-full  bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className=" flex  justify-center text-[58px] text-white my-20">
        Perspectives
      </h1>
      <div className="relative w-full flex justify-center items-center">
        {/* BACKGROUND LINE — ORQADA */}
        <img
          src={line}
          className="absolute top-[-150px]  w-full z-0 opacity-70"
          alt=""
        />

        {/* CONTENT — OLDINDA */}
        {/* CONTENT — OLDINDA */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center relative z-10">
          {/* CARD 1 */}
          <div className="h-[320px] w-[320px] text-white mt-[50px] relative z-10">
            <small className="block flex flex-col gap-10 px-4 opacity-80">
              <small className="text-[16px]">
                "Post-trade is an area where tokenization really shines by
                cutting down the friction and managing capital flows across the
                globe."
              </small>
              <span className="text-[#86A6FD] text-[17px] flex flex-col gap-2">
                <img src={icon1} className="w-[100px]" alt="" />
                <span>- ADENA FRIEDMAN, CEO NASDAQ</span>
              </span>
            </small>
            <img src={bgImg3} className="mt-[-250px]" alt="" />
          </div>

          {/* CARD 2 */}
          <div className="h-[320px] w-[320px] text-white relative z-10">
            <small className="block flex flex-col gap-10 px-4 opacity-80">
              <small className="text-[16px]">
                "Post-trade is an area where tokenization really shines by
                cutting down the friction and managing capital flows across the
                globe."
              </small>
              <span className="text-[#86A6FD] text-[17px] flex flex-col gap-2">
                <img src={icon2} className="w-[100px]" alt="" />
                <span>- ADENA FRIEDMAN, CEO NASDAQ</span>
              </span>
            </small>
            <img src={bgImg3} className="mt-[-250px]" alt="" />
          </div>

          {/* CARD 3 */}
          <div className="h-[320px] w-[320px] text-white mt-[50px] relative z-10">
            <small className="block flex flex-col gap-10 px-4 opacity-80">
              <small className="text-[16px]">
                "Post-trade is an area where tokenization really shines by
                cutting down the friction and managing capital flows across the
                globe."
              </small>
              <span className="text-[#86A6FD] text-[17px] flex flex-col gap-2">
                <img src={icon3} className="w-[100px]" alt="" />
                <span>- ADENA FRIEDMAN, CEO NASDAQ</span>
              </span>
            </small>
            <img src={bgImg3} className="mt-[-250px]" alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className=" 
    flex flex-col-reverse md:flex-row
    items-center justify-center 
    w-full mt-[200px] gap-10
  "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center  justify-center text-center ">
          <h1 className="text-[48px] text-white"style={{marginLeft:'30px'}}>
            Join the{" "}
            <strong
              className="text-white"
              style={{ textShadow: "0 0 15px #3b82f6" }}
            >
              LegalSifter
            </strong>{" "}
            Community
          </h1>

          <p className="text-[16px] text-white opacity-70">
            Stay connected and be the first to receive updates, releases and
            early access opportunities
          </p>

          <form
            className="
        flex my-[60px] bg-white rounded-full 
        w-[90%] md:w-[644px] h-[64px]
        items-center justify-between
      "
          >
            <input
              className="flex-1 px-8 text-xl text-black outline-none"
              type="text"
              placeholder="Join Waitlist"
            />
            <button
              className="
          bg-[#090F22CC] h-full rounded-full 
          px-8 py-2 text-white text-xl outline-none
        "
            >
              Request Demo
              <i
                style={{ textShadow: "0 0 20px rgb(7, 71, 247)" }}
                className="fa-solid fa-magnifying-glass ml-2"
              ></i>
            </button>
          </form>

          <ul className="flex gap-6 flex-row">
            {[twitter, telegram, instagram, coingeko, coinmarketcap].map(
              (icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="
              w-[55px] h-[55px] rounded-full 
              flex items-center justify-center 
              border border-white/100 
              bg-black shadow-inner shadow-white/100
            "
                >
                  <img src={icon} className="w-[25px]" alt="" />
                </a>
              )
            )}
          </ul>
        </div>

        {/* PHONE IMAGE (SMALL SCREEN → TOP) */}
        <img src={phone} className="w-[200px] md:w-auto" alt="" />
      </div>
    </div>
  );
}

export default Layout8;
