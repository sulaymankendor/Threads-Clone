"use client";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

import Header from "@/components/home/Header";
import Suggestions from "./suggestions/Suggestions";
import NavigationBar from "./navigation-bar/NavigationBar";
import { useBodyScrollLock } from "../../../utilities/lockscroll";
// import {
//   ShowAuthenticationModalContext,
//   ShowOnBoardingModalContext,
// } from "@/pages/_app";
// import Authentication from "@/components/authentication/Authentication";
import { useRouter } from "next/navigation";
import {
  ShowAuthenticationModalContext,
  ShowDarkOverlayContext,
  ShowOnBoardingModalContext,
} from "../provider/Providers";
import Authentication from "../authentication/Authentication";
import Onboarding from "../reusable-components/Onboarding";

function Layout({ children }: { children: React.ReactNode }) {
  useBodyScrollLock();
  const showAutheticationModal = useContext(ShowAuthenticationModalContext);
  const showOnBoardingModal = useContext(ShowOnBoardingModalContext);
  const showDarkOverlay = useContext(ShowDarkOverlayContext);
  return (
    <>
      <main className="h-[100vh] overflow-hidden">
        <Header />
        <div className="flex justify-between">
          <NavigationBar />
          <div className="w-[63vw]">{children}</div>
          <Suggestions />
          {/* {showOnBoardingModal?.showOnBoardingModal && <Onboarding />} */}
        </div>
      </main>
    </>
  );
}

export default Layout;
