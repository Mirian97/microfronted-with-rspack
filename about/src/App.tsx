import { Footer } from "home/Footer";
import { Header } from "home/Header";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="text-center py-6">
      <img
        src="https://github.com/Mirian97.png"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Mirian Quispe</h5>
      <p className="text-gray-500">Frontend Developer Master</p>
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
