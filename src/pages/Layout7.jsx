import bgImg from '../assets/image.png'
function Layout7() {
  return (
    <div
      className="flex flex-col h-[auto] w-full items-center justify-center my-[100px] bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-[24px] text-[#90ADFF]">FAQ's</h1>
      <h2 className="text-[58px] text-white">Your Questions, Answered</h2>

      <div className="w-[896px] gap-[30px] items-center mt-[30px]">
        <p className="border-1 flex flex-col rounded-lg p-[20px]">
          <span className="flex justify-between items-center text-[18px]  py-3">
            <small className="text-[18px]">
              When will I receive my $OZ tokens?
            </small>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <small className="text-[18px]">
            Your allocation appears instantly on the dashboard after you
            complete a purchase. You’ll be able to claim those tokens on-chain
            right after the presale ends and we reach TGE. The exact TGE date
            will be announced well in advance, and a one-click “Claim” button
            will go live on the dashboard.
          </small>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">How do I add $OZ to MetaMask?</span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">How does the referral bonus work?</span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">
            Is there a minimum or maximum purchase?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">Is there any lock-up or vesting?</span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">
            How have prices changed across phases?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">
            Can I track presale progress in real time?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">
            Do I need to complete KYC for the presale?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">
            When is the official $Oz token contract address?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] mt-[20px] ">
          <span className="text-[18px]">Can't find your tokens?</span>
          <i className="fa-solid fa-plus"></i>
        </p>
        <p className="border-1 flex flex-row justify-between items-center rounded-lg p-[20px] my-[20px]  ">
          <span className="text-[18px]">
            Still have questions?
          </span>
          <i className="fa-solid fa-plus"></i>
        </p>
      </div>
    </div>
  );
}

export default Layout7
