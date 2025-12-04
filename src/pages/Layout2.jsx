import bgJuveller from "../assets/bg-juveller.png";
import juveller from "../assets/juveller.png";
import layout2 from "../assets/layout2.png";
import layout2_1 from "../assets/Blayout2.png";

function Layout2() {
  return (
    <div className="container flex w-[90%] flex-col my-[70px]">
      <div className="flex flex-row bg-black items-center justify-center">
        <div
          className="flex h-[492px] bg-center  flex flex-row bg-cover border-2 border-black rounded-[16px]"
          style={{ backgroundImage: `url(${bgJuveller})` }}
        >
          <div className="flex flex-col w-[50%] mt-[150px] px-[50px]">
            <p className="text-[12px] text-[#86A6FD]">AI Market Intelligence</p>
            <strong className="text-[38px] text-white py-4">
              AI Powered Smart <br /> Contract Security
            </strong>
            <p className="text-[18px] family-WorkSans text-[#AFAFAF]">
              Our agents read and analyze smart contracts line-by-line,
              detecting exploits, vulnerabilities, attack vectors and logical
              flaws. From redlining terms to auditing Solidity, Rust, Move and
              Vyper code, LegalSifter provides instant risk ratings and
              automated remediation suggestions.
            </p>
          </div>
          <img src={juveller} className="m-0 p-0 w-[50%] h-[110%]" alt="" />
        </div>
      </div>
      <div className="flex flex-row mt-[30px] justify-between">
        <div
          className="w-[49%] h-[687px] bg-cover bg-center  border-2 border-black rounded-[24px]"
          style={{ backgroundImage: `url(${layout2})` }}
        >
          <div className="flex flex-col w-[90%]  mt-[250px] px-[50px]">
            <p className="text-[12px] text-[#86A6FD]">SMART CONTRACT AUDIT</p>
            <strong className="text-[38px] text-white py-4">
              Trustless Data Sources & On-Chain Intelligence Network
            </strong>
            <p className="text-[18px] family-WorkSans text-[#AFAFAF] ">
              LegalSifter aggregates data from multiple chains, oracles,
              mempools, exploiter wallets, attack archives and ML-risk
              databases. Our distributed intelligence network allows real-time
              scanning of contracts, liquidity flows and cross-chain activity
              without relying on centralized data.
            </p>
          </div>
        </div>

        <div
          className="w-[49%] h-[687px] bg-cover bg-center  border-2 border-black rounded-[24px]"
          style={{ backgroundImage: `url(${layout2_1})` }}
        >
          <div className="flex flex-col w-[90%]  mt-[260px] px-[50px]">
            <p className="text-[12px] text-[#86A6FD]">ON-ChAIN SECURITY</p>
            <strong className="text-[38px] text-white py-4">
              Threat Modelling & Attack Simulation
            </strong>
            <p className="text-[18px] family-WorkSans text-[#AFAFAF] ">
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
