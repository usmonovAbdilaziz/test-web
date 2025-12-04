import line1 from "../assets/leftLine.png";
import line2 from "../assets/rightLine.png";
// Importing images from table-img folder
import coinMarketCap from "../table-img/CoinMarketCap.png";
import cointelegraph from "../table-img/Cointelegraph.png";
import container1 from "../table-img/Container (1).png";
import container2 from "../table-img/Container (2).png";
import container3 from "../table-img/Container (3).png";
import container4 from "../table-img/Container (4).png";
import container5 from "../table-img/Container (5).png";
import container6 from "../table-img/Container (6).png";
import container7 from "../table-img/Container (7).png";
import container8 from "../table-img/Container (8).png";
import thePrint from "../table-img/ThePrint.png";
import vector1 from "../table-img/Vector (1).png";
import vector from "../table-img/Vector.png";
import blockonomi from "../table-img/blockonomi.png";
import container from "../table-img/Container.png";

function Layout6() {
  const tableImages = [
    [
      { src: vector, alt: "Vector " },
      { src: thePrint, alt: "ThePrint" },
      { src: cointelegraph, alt: "Cointelegraph" },
      { src: container, alt: "Container" },
      { src: coinMarketCap, alt: "CoinMarketCap" },
    ],
    [
      { src: container1, alt: "Container 1" },
      { src: container2, alt: "Container 2" },
      { src: container3, alt: "Container 3" },
      { src: container4, alt: "Container 4" },
      { src: container5, alt: "Container 5" },
    ],
    [
      { src: container6, alt: "Container 6" },
      { src: container7, alt: "Container 7" },
      { src: blockonomi, alt: "Blockonomi" },
      { src: vector1, alt: "Vector 1" },
      { src: container8, alt: "Container 8" },
    ],
  ];

  return (
    <div className="container flex flex-col my-[100px] w-[90%] mx-auto">
      {/* Road Map */}
      <div className="col-3 flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4 mb-4 md:mb-0">
        <img src={line2} className="p-4" alt="" />
        <button
          style={{ border: "2px solid #888787" }}
          className="relative text-[10px] w-[90px] h-[30px] rounded-full text-white 
                bg-gradient-to-r from-[#2c3e50] via-[#000000] to-[#1a1f2b]
                overflow-hidden"
        >
          Featured
        </button>
        <img src={line1} className="p-4" alt="" />
      </div>

      {/* Title + Description */}
      <div className="col-4 m-0 p-0 flex flex-col md:flex-row justify-between md:justify-between md:items-start text-center md:text-left">
        <strong className="text-[46px] w-full md:w-[900px]">
          As seen on (coming soon)
        </strong>
        <p className="text-[16px] md:text-[20px] text-[#AFAFAF] mt-4 md:mt-0 w-full md:w-[1000px]">
          LegalSifter is currently partnering with leading Web3 and security
          publications. Our media coverage will appear here soon, stay tuned.
        </p>
      </div>

      {/* Image Table Section */}
      <div className="mt-12 w-full overflow-x-auto">
        <table className="min-w-full rounded-lg overflow-hidden">
          <tbody>
            {tableImages.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((image, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-6 px-4 text-center"
                    style={{
                      borderBottom:
                        rowIndex == 2 ? "" : "2px solid rgba(0, 3, 101, 0.66)",
                      borderRight:
                        colIndex !== row.length - 1
                          ? "2px solid rgba(0, 3, 101, 0.66)"
                          : "none", // remove right border for last column
                    }}
                  >
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`max-h-16 max-w-full object-contain filter invert ${
                          image.src === vector1
                            ? "brightness-100"
                            : "brightness-10"
                        }`}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Layout6;
