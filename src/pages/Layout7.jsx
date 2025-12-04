import bgImg from "../assets/image.png";

function Layout7() {
  return (
    <div
      className="flex flex-col h-auto w-full items-center justify-center my-[100px] 
      bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-[20px] md:text-[24px] text-[#90ADFF] text-center">
        FAQ's
      </h1>

      <h2 className="text-[34px] md:text-[58px] text-white text-center leading-tight">
        Your Questions, Answered
      </h2>

      {/* FAQ CONTENT */}
      <div className="w-full md:w-[896px] mx-auto gap-[20px] md:gap-[30px] mt-[30px]">
        {/* OPEN FAQ ITEM */}
        <p className="border flex flex-col rounded-lg p-[15px] md:p-[20px]">
          <span className="flex justify-between items-center text-[16px] md:text-[18px] py-2">
            <small className="text-[16px] md:text-[18px]">
              When will I receive my $OZ tokens?
            </small>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <small className="text-[14px] md:text-[18px]">
            Your allocation appears instantly on the dashboard after you
            complete a purchase. You’ll be able to claim those tokens on-chain
            right after the presale ends and we reach TGE.
          </small>
        </p>

        {/* CLOSED ITEMS */}
        {[
          "How do I add $OZ to MetaMask?",
          "How does the referral bonus work?",
          "Is there a minimum or maximum purchase?",
          "Is there any lock-up or vesting?",
          "How have prices changed across phases?",
          "Can I track presale progress in real time?",
          "Do I need to complete KYC for the presale?",
          "When is the official $Oz token contract address?",
          "Can't find your tokens?",
          "Still have questions?",
        ].map((text, index) => (
          <p
            key={index}
            className="border flex flex-row justify-between items-center rounded-lg 
            p-[15px] md:p-[20px] mt-[15px]"
          >
            <span className="text-[16px] md:text-[18px]">{text}</span>
            <i className="fa-solid fa-plus"></i>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Layout7;
