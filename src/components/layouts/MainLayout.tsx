import React, { ReactNode } from "react";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
