import Layout1 from "./pages/Layout1";
import Layout2 from "./pages/Layout2";
import Layout3 from "./pages/Layout3";
import Layout4 from "./pages/Layout4";
import { Layout5 } from "./pages/Layout5";
import Layout6 from "./pages/Layout6";
import Layout7 from "./pages/Layout7";
import Layout8 from "./pages/Layout8";
import Layout9 from "./pages/Layout9";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Navbar />

      <div className="mt-16 flex flex-col items-center justify-center">
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 />
        <Layout5 />
        <Layout6 />
        <Layout7 />
        <Layout8 />
        <Layout9 />
      </div>
    </div>
  );
}

export default App;
