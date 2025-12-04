import bg1 from "../assets/bg1.png";
import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";
import pause from "../assets/pause.png";

const Layout1 = () => {
  return (
    <div
      className=" w-full bg-cover "
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="col-1 pt-[60px] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center ">
          <img src={line2} alt="" />
          <button
            style={{ border: "2px solid #888787" }}
            className="relative text-[12px] w-[120px] h-[40px] mx-2 rounded-full text-white 
                   bg-gradient-to-r from-[#2c3e50] via-[#0o0o0o] to-[#1a1f2b]
                   overflow-hidden"
          >
            LegalSifter
          </button>

          <img src={line1} alt="" />
        </div>
        <strong className="text-white p-0 m-0 text-[65px] text-center text-bold">
          Protect Smart Contracts With AI <br /> Faster Than Any Auditor
        </strong>
        <p className="text-[#888787] p-4 text-[20px] text-center">
          Enterprise-grade contract review: compliance, security and legal
          certainty <br /> Powered by AI
        </p>
        <div className="col-2 w-[1000px] bg-[#131a2d] h-[500px] border-2 border-white rounded-[50px]">
          <button className="w-full h-full flex items-center justify-center">
            <img src={pause} alt="" />
          </button>
        </div>
        <button className="text-black w-[250px] h-[48px] bg-white rounded-full text-[35px] mt-15 mb-50">
          Try Free Scan
        </button>
        <div className="container flex flex-col w-[90%]">
          <div className="col-3 flex flex-row items-center">
            <img src={line2} className="p-4" alt="" />
            <button
              style={{ border: "2px solid #888787" }}
              className="relative text-[10px] w-[90px] h-[30px] rounded-full text-white 
            bg-gradient-to-r from-[#2c3e50] via-[#0o0o0o] to-[#1a1f2b]
            overflow-hidden"
            >
              Features
            </button>

            <img src={line1} className="p-4" alt="" />
          </div>
          <div className="col-4 my-4 p-0  flex flex-row items-center justify-between ">
            <strong className="text-[50px] w-[1100px]">
              All Agents Built to Think Like Web3 Security Experts
            </strong>

            <p className="text-[16px] m-4 w-[1000px] text-[#AFAFAF] flex items-center text-right justify-end">
              Built for crypto businesses, exchanges, DeFi protocols, and
              individual users. <br />
              LegalSifter’s AI analyzes code, transactions, and legal risk in
              real time, detecting <br /> vulnerabilities, scams, fraud and
              compliance issues before they cause damage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
