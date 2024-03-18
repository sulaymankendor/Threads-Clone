import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useState, createContext, SetStateAction, Dispatch } from "react";

import { app } from "../../lib/firebase-config";
import Layout from "@/components/layout/Layout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Onboarding from "@/components/reusable-components/Onboarding";

export const ShowAuthenticationModalContext = createContext<{
  showAuthenticationModal: boolean;
  setShowAuthenticationModal: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const ShowOnBoardingModalContext = createContext<{
  showOnBoardingModal: boolean;
  setShowOnBoardingModal: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth(app);
  const router = useRouter();
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setShowAuthenticationModal(false);
    } else {
      setShowAuthenticationModal(true);
    }
  });

  return (
    <>
      <ShowAuthenticationModalContext.Provider
        value={{
          showAuthenticationModal,
          setShowAuthenticationModal,
        }}
      >
        <ShowOnBoardingModalContext.Provider
          value={{
            showOnBoardingModal,
            setShowOnBoardingModal,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShowOnBoardingModalContext.Provider>
      </ShowAuthenticationModalContext.Provider>
      {showOnBoardingModal && <Onboarding />}
      {/* <CreateProfile /> */}
    </>
  );
}
