import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";
import bgLayout3 from "../assets/lineBackground.jpg";
function Layout3() {
  return (
    <div className="container mx-auto flex flex-col  items-center justify-center  my-[100px]">
      <div
        className="w-full h-auto bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bgLayout3})` }}
      >
        <div className="flex w-[90%] flex-col md:flex-row md:justify-start items-center gap-6 md:gap-10 px-2   py-10 overflow-x-auto">
          {/* Card 01 */}
          <div
            className="group min-w-[250px] min-h-[300px] p-7 flex flex-col
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

          {/* Card 02 */}
          <div
            className="group  min-w-[250px] min-h-[300px] p-7 flex flex-col
      bg-black/40 backdrop-blur-md border border-white/20
      rounded-[40px] transition-all duration-300
      hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              02
            </span>
            <strong className="text-[28px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Development Phase 1
            </strong>
            <span className="text-[18px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: In Progress
            </span>
            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Advanced AI Risk Scoring for Contracts
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Automated Scam & Exploit Detection (beta)
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Expanded Dataset for Crypto & Web3
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Internal Tools for Analysts (augmented review)
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              Onboarding First Businesses & Early Partners
            </small>
          </div>

          {/* Card 03 */}
          <div
            className="group min-w-[250px] min-h-[300px] p-5 flex flex-col
      bg-[#02071A]/40 backdrop-blur-md border border-white/20
      rounded-[40px] transition-all duration-300
      hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              03
            </span>
            <strong className="text-[28px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Development Phase 2
            </strong>
            <span className="text-[18px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: Starting Soon
            </span>
            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Full Smart-Contract Automated Review
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Real-Time Transaction & Compliance Monitoring
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              AI Legal Advisor for Web3 Operations
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              API for Exchanges, Wallets & DeFi Protocols
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              Predictive Exploit Detection Engine (alert system)
            </small>
          </div>

          {/* Card 04 */}
          <div
            className="group min-w-[250px] min-h-[300px] p-5 flex flex-col
      bg-black/40 backdrop-blur-md border border-white/20
      rounded-[40px] transition-all duration-300
      hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3),0_0_10px_5px_rgba(0,102,255,0.45)]"
          >
            <span className="text-white/70 transition-all duration-300 group-hover:text-blue-400">
              04
            </span>
            <strong className="text-[32px] text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgb(0,102,255)]">
              Growth
            </strong>
            <span className="text-[20px] text-white/80 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgb(0,102,255)]">
              Status: Future
            </span>
            <small className="text-white/70 mt-2 transition-all duration-300 group-hover:text-blue-300">
              Public Launch of Autonomous AI Review
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Business Platform & User Dashboard
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              LegalSifter API Mainnet
            </small>
            <small className="text-white/70 transition-all duration-300 group-hover:text-blue-300">
              Partnership Program for Crypto Companies
            </small>
            <small className="text-white/50 transition-all duration-300 group-hover:text-blue-200">
              AI Agents for Fraud, Risk & Contract Intelligence
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout3;
