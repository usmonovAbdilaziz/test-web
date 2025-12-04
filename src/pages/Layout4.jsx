import { useState } from "react";
import img1 from "../img-layout4/img1-1.png";
import img2 from "../img-layout4/img1-2.png";
import img3 from "../img-layout4/img1-3.png";

import img2_1 from "../img-layout4/img2-1.png";
import img2_2 from "../img-layout4/img2-2.png";
import img2_3 from "../img-layout4/img2-3.png";

import img3_1 from "../img-layout4/img3-1.png";
import img3_2 from "../img-layout4/img3-2.png";
import img3_3 from "../img-layout4/img3-3.png";
import buttomLine from "../img-layout4/buttonLine.png";

function Layout4() {
  const [activeBtn, setActiveBtn] = useState("1");

  const handleBtn = (e) => {
    setActiveBtn(e.target.id);
  };

  const sections = {
    1: [img1, img2, img3],
    2: [img2_1, img2_2, img2_3],
    3: [img3_1, img3_2, img3_3],
  };

  return (
    <div className="my-[100px] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="container flex flex-col w-[90%] md:flex-row justify-center md:justify-between items-center text-center md:text-left">
        <strong className="text-[50px]">Fast & Scalable Infrastructure</strong>
        <p className="text-[20px] md:w-[1000px] text-[#AFAFAF] mt-4 md:mt-0 md:text-right">
          AI-powered protection for traders, builders, investors <br /> and
          enterprises in Web3.
        </p>
      </div>

      {/* Buttons */}
      <div className="container flex flex-row flex-wrap gap-4 w-[90%] mt-6 justify-center md:justify-start">
        {[
          { id: "1", label: "For Individuals" },
          { id: "2", label: "For Businesses" },
          { id: "3", label: "For Enterprises" },
        ].map((btn) => (
          <button
            key={btn.id}
            id={btn.id}
            onClick={handleBtn}
            className={`px-4 py-2 border rounded-[20px] transition-all duration-300 ${
              activeBtn === btn.id
                ? "bg-white text-black shadow-[0_0_10px_2px_rgba(0,102,255,0.7)]"
                : "bg-black text-white shadow-md hover:shadow-[0_0_5px_1px_rgba(0,102,255,0.3)]"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="container flex flex-col md:flex-row gap-4 w-[90%] mt-[50px]">
        {sections[activeBtn].map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="w-full md:w-1/3 h-auto object-cover"
            alt=""
          />
        ))}
      </div>

      {/* Text Blocks */}
      <div className="container flex flex-col md:flex-row gap-6 w-[90%] mt-[30px]">
        <div className="w-full md:w-1/3">
          <p className="text-[24px] my-4">
            Enterprise-Grade Contract Intelligence Hub
          </p>
          <span className="text-[18px] text-[#AFAFAF]">
            Easily upload any Web3 agreement - token purchases, staking terms,
            NFT rights, yield programs into your private, encrypted vault. Your
            contracts stay invisible to everyone except you, while our AI
            instantly flags risks, hidden clauses and malicious patterns.
          </span>
        </div>

        <div className="w-full md:w-1/3">
          <p className="text-[24px] my-4 mt-[20px]">Your AI Legal Guardian</p>
          <span className="text-[18px] text-[#AFAFAF]">
            Deploy a personal AI that analyzes every contract before you sign
            it. It highlights danger zones, explains legal traps in plain
            language and gives you a clear “safe vs risky” score.
          </span>
          <p className="mt-2 text-[#AFAFAF]">Designed to protect you from:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#AFAFAF]">
            <li>rugpull clauses</li>
            <li>predatory lockups</li>
            <li>deceptive fee structures</li>
            <li>unclear ownership or rights</li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <p className="text-[24px] my-4">Stay Safe While Staying Private</p>
          <span className="text-[18px] text-[#AFAFAF]">
            Receive protective insights without exposing your data. Your legal
            Guardian runs locally in your encrypted environment - meaning you
            get intelligence without sacrificing your privacy.
          </span>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-[#AFAFAF]">
            <li>no data sharing</li>
            <li>no third-party access</li>
            <li>no storage on our servers</li>
            <li>Just security, clarity and peace of mind</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full mt-12 flex flex-col items-center">
        <img src={buttomLine} className="w-full max-w-full" alt="" />
        <p className="text-[#AFAFAF] mt-[-20px] text-center">
          Simple. Automated. Built for non-lawyers
        </p>
      </div>
    </div>
  );
}

export default Layout4;
