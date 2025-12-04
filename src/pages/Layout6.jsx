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
  // Organizing images in a table format
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
    <div className="container flex flex-col my-[100px] w-[90%]">
      <div className="col-3 flex flex-row items-center">
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
      <div className="col-4 m-0 p-0 flex flex-row justify-between">
        <strong className="text-[46px] w-[900px]">
          As seen on (coming soon)
        </strong>

        <p className="text-[20px] m-4 w-[1000px] text-[#AFAFAF] flex items-center text-right justify-end">
          LegalSifter is currently partnering with leading Web3 and security
          publications. Our media coverage will appear here soon, stay tuned.
        </p>
      </div>

      {/* Image Table Section */}
      <div className="mt-12 w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg overflow-hidden">
            <tbody>
              {tableImages.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{ borderBottom: "2px solid rgba(0, 3, 101, 0.66)" }}
                >
                  {row.map((image, colIndex) => (
                    <td
                      key={colIndex}
                      className="py-6 px-4 text-center border-r  last:border-r-0"
                      style={{ borderRight: "2px solid rgba(0, 3, 101, 0.66)" }}
                    >
                      <div className="flex justify-center items-center h-full">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`max-h-16 max-w-full object-contain filter  invert ${
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
    </div>
  );
}

export default Layout6;
