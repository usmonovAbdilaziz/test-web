import logo from "../icons/logo-full.svg fill.png";
import twitter from "../icons/Twitter.png";
import telegram from "../icons/Telegram.png";
import instagram from "../icons/Instagram.png";
import coingeko from "../icons/CoinGecko.png";
import coinmarketcap from "../icons/CoinMarketCap.png";

function Layout9() {
  return (
    <div className="flex flex-col w-full mt-[100px] items-center bg-[#000] bg-cover bg-center py-[60px]">
      {/* MAIN WRAPPER */}
      <div
        className="
          w-[90%] md:w-[80%] 
          flex flex-col md:flex-row 
          gap-16 md:gap-20 
          py-[40px]
        "
      >
        {/* LEFT SECTION */}
        <div className="w-full md:w-[25%] text-[22px] flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} className="py-[20px] w-[160px]" alt="" />

          <span className="text-[#999A99] mt-[30px] block text-[16px]">
            Subscribe to our newsletter to get the latest updates on everything
            Ozak AI
          </span>

          <form
            className="
              flex my-[20px] 
              w-full md:w-[320px] 
              h-[54px] 
              justify-between items-center
            "
            style={{ borderBottom: "1px solid #999A99" }}
          >
            <input
              className="flex-1 text-white text-[16px] bg-transparent outline-none"
              type="text"
              placeholder="Email Address"
            />
            <i className="fa-solid fa-circle-arrow-right text-white"></i>
          </form>

          {/* SOCIAL ICONS */}
          <ul className="flex gap-6 mt-4">
            {[twitter, telegram, instagram, coingeko, coinmarketcap].map(
              (icon, idx) => (
                <a key={idx} href="#">
                  <img src={icon} className="w-[25px]" alt="" />
                </a>
              )
            )}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <p className="w-full md:w-[25%] text-[18px] flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <a className="mb-3 text-white">Quick Links</a>
          <a href="#" className="text-[#999A99]">
            Presale
          </a>
          <a href="#" className="text-[#999A99]">
            Predictive AI
          </a>
          <a href="#" className="text-[#999A99]">
            Buy $OZ
          </a>
          <a href="#" className="text-[#999A99]">
            Whitepaper
          </a>
          <a href="#" className="text-[#999A99]">
            Tokenomics
          </a>
          <a href="#" className="text-[#999A99]">
            Roadmap
          </a>
        </p>

        {/* AI AGENTS */}
        <p className="w-full md:w-[25%] text-[18px] flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <a className="mb-3 text-white">AI Agents</a>
          <a href="#" className="text-[#999A99]">
            For Individuals
          </a>
          <a href="#" className="text-[#999A99]">
            For BusinessI
          </a>
          <a href="#" className="text-[#999A99]">
            DePIN
          </a>
          <a href="#" className="text-[#999A99]">
            Join Waitlist
          </a>
        </p>

        {/* EXTRAS */}
        <p className="w-full md:w-[25%] text-[18px] flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <a className="mb-3 text-white">Extras</a>
          <a href="#" className="text-[#999A99]">
            Media Kit
          </a>
          <a href="#" className="text-[#999A99]">
            Blogs
          </a>
          <a href="#" className="text-[#999A99]">
            Documentation
          </a>
          <a href="#" className="text-[#999A99]">
            Support
          </a>
        </p>
      </div>

      {/* BOTTOM */}
      <hr className="w-[90%] md:w-[80%] mt-[60px] border-1 border-[#3F3F3F]" />

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-[#999A99] mt-[30px] text-center">
        <small>Terms</small>
        <small>Disclaimers</small>
        <small>Privacy</small>
      </div>
    </div>
  );
}

export default Layout9;
