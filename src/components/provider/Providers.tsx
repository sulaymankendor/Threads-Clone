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
import { doc, getFirestore, getDoc, DocumentData } from "firebase/firestore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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

export const CurrentAuthUserInfoContext = createContext<{
  currentAuthUserInfo:
    | DocumentData
    | {
        uid: string;
        name: string;
        email: string;
        bio: string;
        profilePicture: string;
      };
  setCurrentAuthUserInfo: Dispatch<SetStateAction<DocumentData>>;
} | null>(null);

export const RouterContext = createContext<AppRouterInstance | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const route = useRouter();
  const pathname = usePathname();
  const router = useRouter();
  const [showDarkOverlay, setShowDarkOverlay] = useState(true);
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  const [currentAuthUserInfo, setCurrentAuthUserInfo] = useState<
    | DocumentData
    | {
        uid: string;
        name: string;
        email: string;
        bio: string;
        profilePicture: string;
      }
  >({
    uid: "",
    name: "",
    email: "",
    bio: "",
    profilePicture: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        setShowDarkOverlay(false);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCurrentAuthUserInfo(docSnap.data());
          // console.log(docSnap.data());
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
  }, [pathname, auth, db, showOnBoardingModal]);
  return (
    <RouterContext.Provider value={router}>
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
            <CurrentAuthUserInfoContext.Provider
              value={{ currentAuthUserInfo, setCurrentAuthUserInfo }}
            >
              {children}
            </CurrentAuthUserInfoContext.Provider>
          </ShowDarkOverlayContext.Provider>
        </ShowOnBoardingModalContext.Provider>
      </ShowAuthenticationModalContext.Provider>
    </RouterContext.Provider>
  );
}
