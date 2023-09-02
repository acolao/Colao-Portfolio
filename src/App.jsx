import React from 'react';
import Footer from "./component/footer";
import Nav from "./component/nav";
import Page from "./component/page";
import { useLocation } from "react-router-dom";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <main>
        <Nav currentPage={currentPage} />
        <Page currentPage={currentPage} />
        <Footer />
    </main>
  );
}
