import React from 'react';
import Header from "./component/Header";
import Nav from "./component/Nav";
import Footer from "./component/Footer/";
import Page from "./component/Page";
import { useLocation } from "react-router-dom";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}
