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
import { usePathname } from "next/navigation";
import { app } from "../../../lib/firebase-config";
import { useParams } from "next/navigation";
import { doc, getFirestore, getDoc } from "firebase/firestore";

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

export const CurrentAuthUserProfilePicContext = createContext<{
  currentAuthUserProfilePic: string;
  setCurrentAuthUserProfilePic: Dispatch<SetStateAction<string>>;
} | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const route = useRouter();
  const pathname = usePathname();
  const [currentAuthUserProfilePic, setCurrentAuthUserProfilePic] =
    useState("");
  const [showDarkOverlay, setShowDarkOverlay] = useState(true);
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        setShowDarkOverlay(false);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCurrentAuthUserProfilePic(docSnap.data().profilePicture);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } else {
        // route.push("/?authentication", undefined, { shallow: true });
        setShowAuthenticationModal(true);
        setShowDarkOverlay(true);
      }
    });
  }, [pathname]);
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
          <CurrentAuthUserProfilePicContext.Provider
            value={{ currentAuthUserProfilePic, setCurrentAuthUserProfilePic }}
          >
            {children}
          </CurrentAuthUserProfilePicContext.Provider>
        </ShowDarkOverlayContext.Provider>
      </ShowOnBoardingModalContext.Provider>
    </ShowAuthenticationModalContext.Provider>
  );
}
