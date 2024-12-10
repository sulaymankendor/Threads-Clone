import { LoadingButton } from "@mui/lab";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
import { Avatar, CircularProgress, IconButton } from "@mui/material";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Comment from "./Comment";
import { CurrentAuthUserInfoContext } from "../provider/Providers";
import { app } from "../../../lib/firebase-config";

function CommentSection({
  threadID,
  verticalMargin,
  closeShowCommentsSection,
}: {
  threadID: string;
  verticalMargin: string;
  closeShowCommentsSection: Dispatch<SetStateAction<boolean>>;
}) {
  const db = getFirestore(app);
  const currentAuthUserInfo = useContext(CurrentAuthUserInfoContext);
  const [currentAuthUserComment, setCurrentAuthUserComment] = useState("");
  const [isPostingComment, setIsPostingComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [noComments, setNoComments] = useState(false);
  const [comments, setComments] = useState<
    | []
    | {
        id: string;
        author: string;
        profilePicture: string;
        createdAt: any;
        comment: string;
      }[]
  >([]);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("threadID", "==", threadID)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (docs.length === 0) {
        setNoComments(true);
        setIsLoading(false);
      } else {
        setNoComments(false);
        setIsLoading(false);
        //@ts-ignore
        setComments(docs);
      }
    });
    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);
  return (
    <div
      className={`w-full border border-gray-800 ${verticalMargin} flex flex-col bg-gray-950`}
    >
      <>
        <div className="flex items-center w-full p-2 border-b-[0.5px] border-gray-800 bg-black">
          <Avatar
            alt="Remy Sharp"
            src={currentAuthUserInfo?.currentAuthUserInfo.profilePicture}
          />
          <input
            onChange={(event) => {
              setCurrentAuthUserComment(event.target.value);
            }}
            value={currentAuthUserComment}
            placeholder="Comment..."
            className="bg-black w-[90%] p-3 outline-none text-gray-200 ml-2"
          />
          <LoadingButton
            loading={isPostingComment}
            sx={{
              backgroundColor: "#8b5cf6",
              borderRadius: "9999px",
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={() => {
              setIsPostingComment(true);
              setDoc(doc(db, "comments", uuidv4()), {
                profilePicture:
                  currentAuthUserInfo?.currentAuthUserInfo.profilePicture,
                author: currentAuthUserInfo?.currentAuthUserInfo.name,
                comment: currentAuthUserComment,
                createdAt: serverTimestamp(),
                threadID: threadID,
              })
                .then(() => {
                  setCurrentAuthUserComment("");
                  setIsPostingComment(false);
                })
                .catch((error) => {
                  console.log(error);
                  setIsPostingComment(false);
                });
            }}
            disabled={currentAuthUserComment ? false : true}
          >
            Post
          </LoadingButton>
        </div>
        <div className="max-h-[70vh] overflow-y-scroll bg-gray-950">
          {isLoading && (
            <div className="mx-auto w-[0%] mt-[12%] mb-[11%]">
              <CircularProgress />
            </div>
          )}
          {noComments ? (
            <p className="text-white font-bolde p-3 text-center text-lg">
              Be the first to leave a comment on this post! ✍️
            </p>
          ) : (
            <>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  author={comment.author}
                  createdAt={comment.createdAt}
                  comment={comment.comment}
                  authorProfilePic={comment.profilePicture}
                />
              ))}
            </>
          )}
        </div>
      </>
      {/* <Button
        className="self-end rounded-full"
        onClick={() => {
          closeShowCommentsSection(false);
        }}
      >
        <ExpandLessIcon />
      </Button> */}
      <IconButton
        className="self-end rounded-full"
        aria-label="expandless comment section"
        onClick={() => {
          closeShowCommentsSection(false);
        }}
        sx={{
          color: "GrayText",
          ":hover": {
            backgroundColor: "#1f1f1f",
          },
          marginRight: 1,
          marginBottom: 0.5,
        }}
      >
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
}

export default CommentSection;
