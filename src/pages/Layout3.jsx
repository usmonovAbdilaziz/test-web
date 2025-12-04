import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";
import bgLayout3 from "../assets/lineBackground.jpg";
function Layout3() {
  return (
    <div className="flex flex-col items-center justify-center  my-[100px]">
      <div className="container flex flex-col  w-[90%]">
        <div className="col-3 flex flex-row items-center">
          <img src={line2} className="p-4" alt="" />
          <button
            style={{ border: "2px solid #888787" }}
            className="relative text-[10px] w-[90px] h-[30px] rounded-full text-white 
            bg-gradient-to-r from-[#2c3e50] via-[#0o0o0o] to-[#1a1f2b]
            overflow-hidden"
          >
            Road Map
          </button>

          <img src={line1} className="p-4" alt="" />
        </div>
        <div className="col-4 m-0 p-0 flex flex-row justify-between ">
          <strong className="text-[50px] w-[900px]">
            Our Timeline on Development Goals.
          </strong>

          <p className="text-[20px] m-4 w-[1000px] text-[#AFAFAF] flex items-center text-right justify-end">
            LegalSifter is rapidly evolving. We already provide real contract &
            smart-contract analysis with human-assisted review, while our full
            AI automation is currently in development. This roadmap shows
            exactly how we scale from today's demo version to a complete,
            autonomous Web3 legal engine.
          </p>
        </div>
      </div>
      <div
        className="w-[100%] h-[400px] bg-center bg-cover  "
        style={{ backgroundImage: `url(${bgLayout3})` }}
      >
        <div className="flex flex-row ms-[70px] w-[90%] items-center my-[100px] gap-10">
          <div
            className="group w-[330px] h-[350px] p-7 flex flex-col
            bg-black/40 backdrop-blur-md border border-white/20
            rounded-[40px] 
            transition-all duration-300
            hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              01
            </span>

            <strong className="text-[32px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Launch
            </strong>

            <span className="text-[20px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: Completed
            </span>

            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Core AI Infrastructure Setup
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              LegalSifter Data Vault
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Early Smart Contract Analysis Engine
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Human-Assisted Risk Review
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              First Demo Product Available
            </small>
          </div>

          <div
            className="group w-[330px] h-[350px] p-7 flex flex-col
            bg-black/40 backdrop-blur-md border border-white/20
            rounded-[40px] 
            transition-all duration-300
            hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              02
            </span>

            <strong className="text-[32px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Development Phase 1
            </strong>

            <span className="text-[20px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: In Progress{" "}
            </span>

            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Advanced AI Risk Scoring for Contracts{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Automated Scam & Exploit Detection (beta)
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Expanded Dataset for Crypto & Web3{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Internal Tools for Analysts (augmented review){" "}
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              Onboarding First Businesses & Early Partners{" "}
            </small>
          </div>
          <div
            className="group w-[330px] h-[350px] p-7 flex flex-col
            bg-[#02071A]/40 backdrop-blur-md border border-white/20
            rounded-[40px] 
            transition-all duration-300
            hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              03
            </span>

            <strong className="text-[32px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Development Phase 2
            </strong>

            <span className="text-[20px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: Starting Soon{" "}
            </span>

            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Full Smart-Contract Automated Review{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Real-Time Transaction & Compliance Monitoring{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              AI Legal Advisor for Web3 Operations{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              API for Exchanges, Wallets & DeFi Protocols{" "}
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              Predictive Exploit Detection Engine (alert system){" "}
            </small>
          </div>
          <div
            className="group w-[330px] h-[350px] p-7 flex flex-col
            bg-black/40 backdrop-blur-md border border-white/20
            rounded-[40px] 
            transition-all duration-300
            hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              04
            </span>

            <strong className="text-[32px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Growth{" "}
            </strong>

            <span className="text-[20px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: Future
            </span>

            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Public Launch of Autonomous AI Review{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Business Platform & User Dashboard{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              LegalSifter API Mainnet{" "}
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Partnership Program for Crypto Companies{" "}
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              AI Agents for Fraud, Risk & Contract Intelligence{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout3;
