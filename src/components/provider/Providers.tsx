"use client";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { app } from "../../../lib/firebase-config";
export const ShowDarkOverlayContext = createContext<{
  showDarkOverlay: boolean;
  setShowDarkOverlay: Dispatch<SetStateAction<boolean>>;
} | null>(null);
export const ShowAuthenticationModalContext = createContext<{
  showAuthenticationModal: boolean;
  setShowAuthenticationModal: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const ShowOnBoardingModalContext = createContext<{
  showOnBoardingModal: boolean;
  setShowOnBoardingModal: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const route = useRouter();
  const [showDarkOverlay, setShowDarkOverlay] = useState(true);
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowAuthenticationModal(false);
      } else {
        // route.push("/?authentication", undefined, { shallow: true });
        setShowAuthenticationModal(true);
      }
    });
  }, []);
  return (
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
        <ShowDarkOverlayContext.Provider
          value={{ showDarkOverlay, setShowDarkOverlay }}
        >
          {children}
        </ShowDarkOverlayContext.Provider>
      </ShowOnBoardingModalContext.Provider>
    </ShowAuthenticationModalContext.Provider>
  );
}
