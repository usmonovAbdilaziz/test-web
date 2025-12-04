import bgJuveller from "../assets/bg-juveller.png";
import juveller from "../assets/juveller.png";
import layout2 from "../assets/layout2.png";
import layout2_1 from "../assets/Blayout2.png";

function Layout2() {
  return (
    <div className="container mx-auto w-[90%] my-16 flex flex-col gap-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row bg-black border-2 border-black rounded-[16px] overflow-hidden">
        {/* Text Block */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12">
          <p className="text-sm md:text-base text-[#86A6FD]">
            AI Market Intelligence
          </p>
          <strong className="text-2xl md:text-4xl text-white py-2 md:py-4 leading-snug">
            AI Powered Smart <br /> Contract Security
          </strong>
          <p className="text-sm md:text-base font-sans text-[#AFAFAF]">
            Our agents read and analyze smart contracts line-by-line, detecting
            exploits, vulnerabilities, attack vectors and logical flaws. From
            redlining terms to auditing Solidity, Rust, Move and Vyper code,
            LegalSifter provides instant risk ratings and automated remediation
            suggestions.
          </p>
        </div>
        {/* Image Block */}
        <div
          className="w-full md:w-1/2 h-64 md:h-[492px] bg-center bg-cover"
          style={{ backgroundImage: `url(${juveller})` }}
        ></div>
      </div>

      {/* Two-Column Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Block */}
        <div
          className="relative w-full md:w-1/2 h-80 md:h-[687px] bg-center bg-cover border-2 border-black rounded-[24px]"
          style={{ backgroundImage: `url(${layout2})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <p className="text-sm md:text-base text-[#86A6FD]">
              SMART CONTRACT AUDIT
            </p>
            <strong className="text-2xl md:text-4xl text-white py-2 md:py-4 leading-snug">
              Trustless Data Sources & On-Chain Intelligence Network
            </strong>
            <p className="text-sm md:text-base font-sans text-[#AFAFAF]">
              LegalSifter aggregates data from multiple chains, oracles,
              mempools, exploiter wallets, attack archives and ML-risk
              databases. Our distributed intelligence network allows real-time
              scanning of contracts, liquidity flows and cross-chain activity
              without relying on centralized data.
            </p>
          </div>
        </div>

        {/* Right Block */}
        <div
          className="relative w-full md:w-1/2 h-80 md:h-[687px] bg-center bg-cover border-2 border-black rounded-[24px]"
          style={{ backgroundImage: `url(${layout2_1})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <p className="text-sm md:text-base text-[#86A6FD]">
              ON-CHAIN SECURITY
            </p>
            <strong className="text-2xl md:text-4xl text-white py-2 md:py-4 leading-snug">
              Threat Modelling & Attack Simulation
            </strong>
            <p className="text-sm md:text-base font-sans text-[#AFAFAF]">
              AI agents simulate the most common and emerging Web3 attack
              patterns: reentrancy, flash-loan loops, price-oracle manipulation,
              governance capture and economic exploits. This allows you to
              predict how malicious actors could break your protocol before they
              do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout2;
