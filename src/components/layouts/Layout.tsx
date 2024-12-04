import React, { ReactNode } from "react";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
