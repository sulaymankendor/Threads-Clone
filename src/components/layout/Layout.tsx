import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import Header from "@/components/home/Header";
import Suggestions from "./suggestions/Suggestions";
import NavigationBar from "./navigation-bar/NavigationBar";
import { useBodyScrollLock } from "../../../utilities/lockscroll";
import { ShowAuthenticationModalContext } from "@/pages/_app";
import Authentication from "@/components/authentication/Authentication";

function layout({ children }: { children: JSX.Element }) {
  useBodyScrollLock();
  const showAutheticationModal = useContext(ShowAuthenticationModalContext);

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
      {showAutheticationModal?.showAuthenticationModal && (
        <div className="bg-black fixed left-0 right-0 top-0 bottom-0 opacity-100"></div>
      )}
    </>
  );
}

export default layout;
