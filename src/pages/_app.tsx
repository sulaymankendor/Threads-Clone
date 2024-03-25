import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";

import { app } from "../../lib/firebase-config";
import Layout from "@/components/layout/Layout";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  const route = useRouter();
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowAuthenticationModal(false);
      } else {
        route.push("/?authentication", undefined, { shallow: true });
        setShowAuthenticationModal(true);
      }
    });
  }, []);

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
    </>
  );
}
