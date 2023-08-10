import ReactDOM from "react-dom/client";
import { useLocation } from "react-router-dom";
import "./App.css";
import About from "./component/about";
import Nav from "./component/nav";

export default function App() {
  const currentPage = useLocation().pathname;

  return <Nav currentPage={currentPage} />;
}
