"use client";
import User from "@/components/reusable-components/User";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../lib/firebase-config";
import { CircularProgress } from "@mui/material";

function Search() {
  const [searchedText, setSearchedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState<
    | {
        id: string;
        bio: string;
        email: string;
        name: string;
        profilePicture: string;
        uid: string;
      }[]
    | []
  >([]);
  const [users, setUsers] = useState<
    | {
        id: string;
        bio: string;
        email: string;
        name: string;
        profilePicture: string;
        uid: string;
      }[]
    | []
  >([]);
  const db = getFirestore(app);

  const renderUsers = () => {
    if (searchedText.length > 0 && searchedUsers.length > 0) {
      return searchedUsers.map((user) => <User key={user.id} user={user} />);
    } else if (searchedText.length === 0 && searchedUsers.length === 0) {
      return users.map((user) => <User key={user.id} user={user} />);
    } else {
      return (
        <h1 className="text-white text-center text-2xl font-bold w-[90%] my-8">
          No Results Found
        </h1>
      );
    }
  };

  useEffect(() => {
    if (searchedText.length > 0) {
      setSearchedUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchedText.toLowerCase())
        )
      );
    } else {
      setSearchedUsers([]);
    }
  }, [searchedText]);

  useEffect(() => {
    setIsLoading(true);
    const homeThreads = collection(db, "users");
    const unsubscribe = onSnapshot(homeThreads, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //@ts-ignore
      setUsers(docs);
      setIsLoading(false);
    });
    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">Search</h1>
      <div className="flex w-[90%] items-center mb-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12 text-gray-400 bg-zinc-900 p-1"
          style={{
            width: "40px",
            borderTopLeftRadius: "7px",
            borderBottomLeftRadius: "7px",
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          placeholder="Search for People..."
          className="bg-zinc-900 text-white p-3 w-full outline-none"
          style={{
            borderTopRightRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
          onChange={(event) => setSearchedText(event.target.value)}
        />
      </div>
      <div className="w-[90%] h-[70vh] overflow-y-scroll">{renderUsers()}</div>
    </section>
  );
}

export default Search;
