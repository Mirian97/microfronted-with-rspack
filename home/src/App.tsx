import ReactDOM from "react-dom/client";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./index.css";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl min-h-dvh flex flex-col">
    <Header />
    <div className="my-10 mx-4">Home page</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
