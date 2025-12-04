import bg1 from "../assets/bg1.png";
import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";
import pause from "../assets/pause.png";

const Layout1 = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="pt-[60px] flex flex-col justify-center items-center">
        {/* Top Button */}
        <div className="flex items-center justify-center">
          <img src={line2} alt="" className="hidden sm:block" />

          <button
            style={{ border: "2px solid #888787" }}
            className="relative text-[12px] w-[120px] h-[40px] mx-2 rounded-full text-white 
            bg-gradient-to-r from-[#2c3e50] via-[#000] to-[#1a1f2b] overflow-hidden"
          >
            LegalSifter
          </button>

          <img src={line1} alt="" className="hidden sm:block" />
        </div>

        {/* Title */}
        <strong className="text-white text-[40px] sm:text-[55px] lg:text-[65px] text-center font-bold">
          Protect Smart Contracts With AI <br /> Faster Than Any Auditor
        </strong>

        {/* Subtitle */}
        <p className="text-[#888787] px-4 text-[16px] sm:text-[20px] text-center mt-4">
          Enterprise-grade contract review: compliance, security and legal
          certainty
          <br />
          Powered by AI
        </p>

        {/* VIDEO BOX — 20%ga kichraytirildi + RESPONSIV */}
        <div
          className="
            col-2 
            bg-[#131a2d] 
            border-2 border-white 
            rounded-[40px]
            mt-10

            w-[800px] h-[400px]      /* Desktop: 20%ga kichik */
            lg:w-[800px] lg:h-[400px]
            md:w-[600px] md:h-[320px]
            sm:w-[90%] sm:h-[250px]
            max-w-full mx-auto
          "
        >
          <button className="w-full h-full flex items-center justify-center">
            <img
              src={pause}
              alt=""
              className="w-[120px] sm:w-[70px] h-auto opacity-80"
            />
          </button>
        </div>

        {/* Try Button */}
        <button className="text-black w-[220px] sm:w-[250px] h-[45px] bg-white rounded-full text-[28px] sm:text-[35px] mt-10 mb-20">
          Try Free Scan
        </button>

        {/* Features Section */}
        <div className="w-[95%] max-w-[1400px]">
          {/* Features title with lines */}
          <div className="flex flex-row items-center justify-center">
            <img src={line2} className="hidden sm:block px-4" alt="" />

            <button
              style={{ border: "2px solid #888787" }}
              className="relative text-[10px] w-[90px] h-[30px] rounded-full text-white 
              bg-gradient-to-r from-[#2c3e50] via-[#000] to-[#1a1f2b]
              overflow-hidden"
            >
              Features
            </button>

            <img src={line1} className="hidden sm:block px-4" alt="" />
          </div>

          {/* Main Features Layout */}
          <div className="my-4 flex flex-col lg:flex-row items-center lg:justify-between">
            <strong className="text-[36px] sm:text-[50px] lg:w-[50%] text-center lg:text-left">
              All Agents Built to Think Like Web3 Security Experts
            </strong>

            <p className="text-[16px] sm:text-[18px] mt-4 lg:mt-0 lg:w-[50%] text-[#AFAFAF] text-center lg:text-right leading-relaxed">
              Built for crypto businesses, exchanges, DeFi protocols, and
              individual users. <br />
              LegalSifter’s AI analyzes code, transactions, and legal risk in
              real time, detecting vulnerabilities, scams, fraud and compliance
              issues before they cause damage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
