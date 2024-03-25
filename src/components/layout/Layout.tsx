import Head from "next/head";
import { useContext, useEffect, useState } from "react";

import Header from "@/components/home/Header";
import Suggestions from "./suggestions/Suggestions";
import NavigationBar from "./navigation-bar/NavigationBar";
import { useBodyScrollLock } from "../../../utilities/lockscroll";
import {
  ShowAuthenticationModalContext,
  ShowOnBoardingModalContext,
} from "@/pages/_app";
import Authentication from "@/components/authentication/Authentication";
import Onboarding from "../reusable-components/Onboarding";
import { useRouter } from "next/router";

function Layout({ children }: { children: JSX.Element }) {
  const route = useRouter();
  useBodyScrollLock();
  const showAutheticationModal = useContext(ShowAuthenticationModalContext);
  const showOnBoardingModal = useContext(ShowOnBoardingModalContext);
  return (
    <>
      <div className="h-[100vh] overflow-hidden">
        <Head>
          <title>Threads</title>
        </Head>
        <Header />
        <main className="flex justify-between">
          <NavigationBar />
          {children}
          <Suggestions />
        </main>
      </div>
      {showAutheticationModal?.showAuthenticationModal && <Authentication />}
      {/* {showOnBoardingModal?.showOnBoardingModal && <Onboarding />} */}
      <Onboarding />
      <div className="bg-black fixed left-0 right-0 top-0 bottom-0 opacity-100"></div>
    </>
  );
}

export default Layout;
