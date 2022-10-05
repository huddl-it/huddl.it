import React, { PropsWithChildren } from "react";
import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="min-h-screen px-20">
      <Header />
      <main className="flex py-8 gap-10">
        <SideBar />
        <section>{children}</section>
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
