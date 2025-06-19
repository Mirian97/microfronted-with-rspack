import { Footer } from "home/Footer";
import { Header } from "home/Header";
import "home/styles";
import ReactDOM from "react-dom/client";
import { Profile } from "./components/profile";
import "./index.css";

const App = () => (
  <div className="mx-auto w-full flex flex-col min-h-dvh bg-zinc-100">
    <Header />
    <Profile />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
