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
  const [activeBtn, setActiveBtn] = useState("1"); // tanlangan button id

  const handleBtn = (e) => {
    setActiveBtn(e.target.id);
  };

  return (
    <div className="my-[100px] flex flex-col justify-center items-center ">
      <div className="container flex flex-col w-[90%]">
        <div className="col-4 m-0 p-0 flex flex-row justify-between ">
          <strong className="text-[50px] w-[900px]">
            Fast & Scalable Infrastructure
          </strong>

          <p className="text-[20px] m-4 w-[1000px] text-[#AFAFAF] flex items-center text-right justify-end">
            AI-powered protection for traders, builders, investors <br /> and
            enterprises in Web3.
          </p>
        </div>
      </div>

      <div className="container flex flex-row w-[90%] gap-4">
        <button
          onClick={handleBtn}
          className={`px-4 py-2 border rounded-[20px] transition-all duration-300 ${
            activeBtn === "1"
              ? "bg-white text-black shadow-[0_0_10px_2px_rgba(0,102,255,0.7)]"
              : "bg-black text-white shadow-md hover:shadow-[0_0_5px_1px_rgba(0,102,255,0.3)]"
          }`}
          id="1"
        >
          For Individuals
        </button>

        <button
          onClick={handleBtn}
          className={`px-4 py-2 border rounded-[20px] transition-all duration-300 ${
            activeBtn === "2"
              ? "bg-white text-black shadow-[0_0_10px_2px_rgba(0,102,255,0.7)]"
              : "bg-black text-white shadow-md hover:shadow-[0_0_5px_1px_rgba(0,102,255,0.3)]"
          }`}
          id="2"
        >
          For Businesses
        </button>

        <button
          onClick={handleBtn}
          className={`px-4 py-2 border rounded-[20px] transition-all duration-300 ${
            activeBtn === "3"
              ? "bg-white text-black shadow-[0_0_10px_2px_rgba(0,102,255,0.7)]"
              : "bg-black text-white shadow-md hover:shadow-[0_0_5px_1px_rgba(0,102,255,0.3)]"
          }`}
          id="3"
        >
          For Enterprises
        </button>
      </div>
      {/* For Individuals */}
      {activeBtn === "1" && (
        <div className="container flex flex-col w-[90%] mt-[50px]">
          <div className="flex flex-row m-0 p-0">
            <img src={img1} className="h-[400px]" alt="" />
            <img src={img2} style={{ marginTop: "-70px" }} alt="" />
            <img src={img3} className="h-[400px]" alt="" />
          </div>
          <div
            className="flex flex-row  gap-30"
            style={{ marginTop: "-300px" }}
          >
            <div className="w-[30%]">
              <p className="text-[24px] my-4">
                Enterprise-Grade Contract Intelligence Hub
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Easily upload any Web3 agreement - token <br />
                purchases, staking terms, NFT rights, yield <br /> programs into
                your private, encrypted vault. <br />
                Your contracts stay invisible to everyone
                <br /> except you, while our AI instantly flags risks, <br />{" "}
                hidden clauses and malicious patterns. <br /> <br />
                Perfect for: retail investors, traders and <br />
                crypto users who want real protection.
              </span>
            </div>
            <div className="w-[30%]">
              <p className="text-[24px] my-4 mt-[20px]">
                Your AI Legal Guardian
              </p>
              <span className="w-[20%] font-sans text-[18px] text-[#AFAFAF]">
                Deploy a personal AI that analyzes every contract before you
                sign it. It highlights danger zones, explains legal traps in
                plain language and gives you a clear “safe vs risky” score
                <br />
                <br />
              </span>

              <p className="font-sans mb-2 text-[#AFAFAF]">
                Designed to protect you from:
              </p>

              <ul
                style={{ marginLeft: "10px" }}
                className="list-disc pl-5  space-y-1 text-[#AFAFAF]"
              >
                <li>rugpull clauses</li>
                <li>predatory lockups</li>
                <li>deceptive fee structures</li>
                <li>unclear ownership or rights</li>
              </ul>
            </div>

            <div className="w-[30%]">
              <p className="text-[24px] my-4">
                Stay Safe While Staying Private
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Receive protective insights without exposing your data. Your
                legal Guardian runs locally in your encrypted environment -
                meaning you get intelligence without sacrificing your privacy.
                <ul className="mt-2 list-disc  space-y-1 ">
                  You keep full control:
                  <li style={{ marginLeft: "3   0px" }}>no data sharing </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    no third-party access
                  </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    {" "}
                    no storage on our servers
                  </li>
                  Just security, clarity and peace of mind.
                </ul>
              </span>
            </div>
          </div>
        </div>
      )}
      {/* For Businesses */}
      {activeBtn === "2" && (
        <div className="container flex flex-col w-[90%] mt-[50px]">
          <div className="flex flex-row gap-40">
            <img src={img2_1} className="h-[400px] mx-[-30px]" alt="" />
            <img src={img2_2} className="h-[300px]" alt="" />
            <img src={img2_3} className="h-[400px]" alt="" />
          </div>
          <div className="flex flex-row  gap-30">
            <div className="w-[30%]">
              <p className="text-[24px] my-4">
                Enterprise-Grade Contract Intelligence Hub
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Easily upload any Web3 agreement - token <br />
                purchases, staking terms, NFT rights, yield <br /> programs into
                your private, encrypted vault. <br />
                Your contracts stay invisible to everyone
                <br /> except you, while our AI instantly flags risks, <br />{" "}
                hidden clauses and malicious patterns. <br /> <br />
                Perfect for: retail investors, traders and <br />
                crypto users who want real protection.
              </span>
            </div>
            <div className="w-[30%]">
              <p className="text-[24px] my-4 mt-[20px]">
                Your AI Legal Guardian
              </p>
              <span className="w-[20%] font-sans text-[18px] text-[#AFAFAF]">
                Deploy a personal AI that analyzes every contract before you
                sign it. It highlights danger zones, explains legal traps in
                plain language and gives you a clear “safe vs risky” score
                <br />
                <br />
              </span>

              <p className="font-sans mb-2 text-[#AFAFAF]">
                Designed to protect you from:
              </p>

              <ul
                style={{ marginLeft: "10px" }}
                className="list-disc pl-5  space-y-1 text-[#AFAFAF]"
              >
                <li>rugpull clauses</li>
                <li>predatory lockups</li>
                <li>deceptive fee structures</li>
                <li>unclear ownership or rights</li>
              </ul>
            </div>

            <div className="w-[30%]">
              <p className="text-[24px] my-4">
                Stay Safe While Staying Private
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Receive protective insights without exposing your data. Your
                legal Guardian runs locally in your encrypted environment -
                meaning you get intelligence without sacrificing your privacy.
                <ul className="mt-2 list-disc  space-y-1 ">
                  You keep full control:
                  <li style={{ marginLeft: "3   0px" }}>no data sharing </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    no third-party access
                  </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    {" "}
                    no storage on our servers
                  </li>
                  Just security, clarity and peace of mind.
                </ul>
              </span>
            </div>
          </div>
        </div>
      )}
      {/* For Enterprises */}
      {activeBtn === "3" && (
        <div className="container flex flex-col w-[90%] mt-[50px]">
          <div className="flex flex-row gap-40">
            <img src={img3_1} className="h-[350px] mx-[-30px]" alt="" />
            <img src={img3_2} className="h-[400px]" alt="" />
            <img src={img3_3} className="h-[400px]" alt="" />
          </div>
          <div className="flex flex-row  gap-30">
            <div className="w-[30%]">
              <p className="text-[24px] ">
                Enterprise-Grade Contract Intelligence Hub
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Easily upload any Web3 agreement - token <br />
                purchases, staking terms, NFT rights, yield <br /> programs into
                your private, encrypted vault. <br />
                Your contracts stay invisible to everyone
                <br /> except you, while our AI instantly flags risks, <br />{" "}
                hidden clauses and malicious patterns. <br /> <br />
                Perfect for: retail investors, traders and <br />
                crypto users who want real protection.
              </span>
            </div>
            <div className="w-[30%]">
              <p className="text-[24px] my-4 mt-[20px]">
                Your AI Legal Guardian
              </p>
              <span className="w-[20%] font-sans text-[18px] text-[#AFAFAF]">
                Deploy a personal AI that analyzes every contract before you
                sign it. It highlights danger zones, explains legal traps in
                plain language and gives you a clear “safe vs risky” score
                <br />
                <br />
              </span>

              <p className="font-sans mb-2 text-[#AFAFAF]">
                Designed to protect you from:
              </p>

              <ul
                style={{ marginLeft: "10px" }}
                className="list-disc pl-5  space-y-1 text-[#AFAFAF]"
              >
                <li>rugpull clauses</li>
                <li>predatory lockups</li>
                <li>deceptive fee structures</li>
                <li>unclear ownership or rights</li>
              </ul>
            </div>

            <div className="w-[30%]">
              <p className="text-[24px] my-4">
                Stay Safe While Staying Private
              </p>
              <span className="w-[100px] font-sans text-[18px] text-[#AFAFAF]">
                Receive protective insights without exposing your data. Your
                legal Guardian runs locally in your encrypted environment -
                meaning you get intelligence without sacrificing your privacy.
                <ul className="mt-2 list-disc  space-y-1 ">
                  You keep full control:
                  <li style={{ marginLeft: "3   0px" }}>no data sharing </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    no third-party access
                  </li>
                  <li style={{ marginLeft: "3   0px" }}>
                    {" "}
                    no storage on our servers
                  </li>
                  Just security, clarity and peace of mind.
                </ul>
              </span>
            </div>
          </div>
        </div>
      )}
      <img
        src={buttomLine}
        style={{ marginLeft: "-100px" }}
        className="mt-[-70px] w-[100%] "
        alt=""
      />
      <p
        style={{ marginLeft: "-100px" }}
        className="text-[#AFAFAF] mt-[-30px] "
      >
        Simple. Automated. Built for non-lawyers
      </p>
    </div>
  );
}

export default Layout4;
