import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useBodyScrollLock } from "../../../utilities/lockscroll";
import Header from "@/components/home/Header";
import NavigationBar from "./navigation-bar/NavigationBar";
import Suggestions from "./suggestions/Suggestions";
import Authentication from "../authentication/Authentication";
import CreateProfile from "../create-a-profile/CreateProfile";

function layout({ children }) {
  useBodyScrollLock();
  const route = useRouter();
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);

  useEffect(() => {
    if (route.route === "/") {
      setShowAuthenticationModal(true);
    }
  }, [route.route]);
  const [currentPageTitle, setCurrentPageTitle] = useState(
    route.route.split("/")[1]
  );
  useEffect(() => {
    if (route.route.split("/").length === 2) {
      setCurrentPageTitle(route.route.split("/")[1]);
    } else if (route.route.split("/").length === 3) {
      setCurrentPageTitle(
        route.route.split("/").slice(1).toString().replace(",", "-")
      );
    }
  }, [route.route]);
  return (
    <div className="h-[100vh] overflow-hidden">
      <Head>
        <title>{currentPageTitle}</title>
      </Head>
      <Header />
      <main className="flex justify-between">
        <NavigationBar />
        {children}
        <Suggestions />
      </main>
      {showAuthenticationModal && <Authentication />}
      {/* <CreateProfile /> */}
    </div>
  );
}

export default layout;
