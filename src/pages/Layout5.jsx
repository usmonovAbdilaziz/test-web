import metamask from "../icons/mathIcon.jpg";
import bnb from "../icons/bnbIcon.png";
import gemini from "../icons/gemeni.png";
import openAi from "../icons/openAi.png";
import solidity from "../icons/solidity.png";
import reactIcon from "../icons/react.jpg";
import nextjs from "../icons/next.jpg";
import googleCloud from "../icons/google.png";
import cloudflare from "../icons/cloudflare.png";
import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";

const badges = [
  { name: "Metamask", icon: metamask, url: "https://metamask.io/" },
  { name: "BNB Chain", icon: bnb, url: "https://www.bnbchain.org/" },
  { name: "Gemini", icon: gemini, url: "https://gemini.com/" },
  { name: "ChatGPT", icon: openAi, url: "https://chat.openai.com/" },
  { name: "Solidity", icon: solidity, url: "https://soliditylang.org/" },
  { name: "React", icon: reactIcon, url: "https://react.dev/" },
  { name: "Next.js", icon: nextjs, url: "https://nextjs.org/" },
  { name: "Google Cloud", icon: googleCloud, url: "https://cloud.google.com/" },
  { name: "Cloudflare", icon: cloudflare, url: "https://cloudflare.com/" },
];

export function Layout5() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-[100px]">
      <div className="flex items-center justify-center ms-[-100px] ">
        <img src={line2} alt="" />
        <button
          style={{ border: "2px solid #888787" }}
          className="relative text-[12px] w-[120px] h-[40px] mx-2 rounded-full text-white 
                  bg-gradient-to-r from-[#2c3e50] via-[#0o0o0o] to-[#1a1f2b]
                  overflow-hidden"
        >
          Technology
        </button>

        <img src={line1} alt="" />
      </div>
      <h1 className="text-[46px] font-bold text-white ms-[-100px] mt-[20px]">Integrated With</h1>
      <div className="w-full mt-10 flex justify-center overflow-hidden">
        <div className="w-full py-3 relative h-[200px]">
          {/* Top horizontal track - moving left to right */}
          <div className="absolute top-0 left-0 w-full flex animate-carousel-right">
            {[...badges, ...badges].map((item, index) => (
              <a
                key={`top-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex items-center gap-3 bg-[#1b1e23] px-10 py-4
            rounded-full border border-gray-500 hover:bg-[#2b3038]
            transition mx-2 my-4 whitespace-nowrap
            "
              >
                <img src={item.icon} alt={item.name} className="w-6 m-0  h-6" />
                <span className="text-white text-[18px] font-medium">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full flex animate-carousel-left">
            {[...badges, ...badges].map((item, index) => (
              <a
                key={`bottom-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex items-center gap-3 bg-[#1b1e23] px-10 py-4
            rounded-full border border-gray-500 hover:bg-[#2b3038]
            transition mx-2 my-4 whitespace-nowrap
            "
              >
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <span className="text-white text-[18px] font-medium">
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* Left vertical track - moving top to bottom
        <div className="absolute left-0 top-0 h-full flex flex-col animate-carousel-down">
        {[...badges, ...badges].map((item, index) => (
          <a
          key={`left-${index}`}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex items-center gap-3 bg-[#1b1e23] px-8 py-4
          rounded-full border border-gray-500 hover:bg-[#2b3038]
          transition mx-4 my-2 whitespace-nowrap
          "
          >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
          <span className="text-white text-[18px] font-medium">
          {item.name}
          </span>
          </a>
          ))}
          </div> */}

          {/* Right vertical track - moving bottom to top */}
          {/* <div className="absolute right-0 top-0 h-full flex flex-col animate-carousel-up">
          {[...badges, ...badges].map((item, index) => (
            <a
            key={`right-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex items-center gap-3 bg-[#1b1e23] px-8 py-4
            rounded-full border border-gray-500 hover:bg-[#2b3038]
            transition mx-4 my-2 whitespace-nowrap
            "
            >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="text-white text-[18px] font-medium">
            {item.name}
            </span>
            </a>
            ))}
            </div> */}
        </div>
      </div>
    </div>
  );
}
