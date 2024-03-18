import EditCurrentUserInfo from "./EditCurrentUserInfo";

function CurrentUserProfile() {
  return (
    <>
      <div className="z-10 rounded-2xl bg-gray-800 fixed top-[5vh] left-[30vw] w-[530px] overflow-x-hidden">
        <div className="flex justify-between">
          <EditCurrentUserInfo />
        </div>
      </div>
      <div className="bg-black fixed left-0 right-0 top-0 bottom-0 opacity-80"></div>
    </>
  );
}

export default CurrentUserProfile;
