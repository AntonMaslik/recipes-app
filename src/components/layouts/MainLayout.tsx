import React, { ReactNode } from "react";

import "@components/layouts/styles/main.scss";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layout-container">
    <Navbar />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
