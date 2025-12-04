import logo from "../icons/logo-full.svg fill.png";
import twitter from "../icons/Twitter.png";
import telegram from "../icons/Telegram.png";
import instagram from "../icons/Instagram.png";
import coingeko from "../icons/CoinGecko.png";
import coinmarketcap from "../icons/CoinMarketCap.png";

function Layout9() {
  return (
    <div className="flex flex-col w-full  mt-[100px] items-center bg-[#000] bg-cover bg-center h-[600px]">
      <div className=" w-[80%] flex flex-row gap-20 py-[40px]">
        <p className=" w-[20%] text-[22px]">
          <img src={logo} className="py-[20px]" alt="" />
          <span className="text-[#999A99] my-[50px]">
            Subscribe to our newsletter to get the latest updates on everything
            Ozak AI
          </span>
          <form
            className="flex my-[20px] w-[320px] h-[64px] justify-between items-center"
            style={{ borderBottom: "1px solid #999A99" }}
          >
            <input
              className="flex-1 text-white text-[16px] bottom-[2px] bottom-white  text-black outline-none"
              type="text"
              placeholder="Email Address"
            />
            <i className="fa-solid fa-circle-arrow-right"></i>
            <button className="  text-white text-xl outline-none"></button>
          </form>

          <ul className="flex gap-6 flex-row">
            <a href="#">
              <img src={twitter} className="w-[25px]" alt="" />
            </a>

            <a href="#">
              <img src={telegram} className="w-[25px]" alt="" />
            </a>

            <a href="#">
              <img src={instagram} className="w-[25px]" alt="" />
            </a>

            <a href="#">
              <img src={coingeko} className="w-[25px]" alt="" />
            </a>

            <a href="#">
              <img src={coinmarketcap} className="w-[25px]" alt="" />
            </a>
          </ul>
        </p>
        <p className=" ps-[200px] w-[30%] text-[18px] my-[20px] flex flex-col gap-2">
          <a href="#" style={{ marginBottom: "10px" }}>
            Quick Links
          </a>
          <a href="#">Presale</a>
          <a href="#">Predictive AI</a>
          <a href="#">Buy $OZ</a>
          <a href="#">Whitepaper</a>
          <a href="#">Tokenomics</a>
          <a href="#">Roadmap</a>
        </p>
        <p className=" ps-[100px] w-[25%] text-[18px] my-[20px] flex flex-col gap-2">
          <a href="#" style={{ marginBottom: "10px" }}>
            AI Agents
          </a>
          <a href="#">For Individuals</a>
          <a href="#">For BusinessI</a>
          <a href="#">DePIN</a>
          <a href="#">Join Waitlist</a>
        </p>
        <p className=" ps-[100px] w-[25%] text-[18px] my-[20px] flex flex-col gap-2">
          <a href="#" style={{ marginBottom: "10px" }}>
            Extras
          </a>
          <a href="#">Media Kit</a>
          <a href="#">Blogs</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </p>
      </div>
      <hr className="w-[80%] mt-[100px] border-1  border-[#3F3F3F]" />
      <div className="flex flex-row gap-6 text-[#999A99] mt-[30px]">
        <small>Terms</small>
        <small>Disclaimers</small>
        <small>Privacy</small>
      </div>
    </div>
  );
}

export default Layout9;

