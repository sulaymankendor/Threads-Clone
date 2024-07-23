import { Avatar } from "@mui/material";

function EditProfile() {
  return (
    <section className="w-full overflow-y-scroll h-[92vh] pb-20">
      <section className="w-[96%] ml-7 mb-7">
        <div>
          <h1 className="text-white text-2xl font-bold w-[90%] my-8">
            Edit Profile
          </h1>
          <p className="text-gray-300 mt-[-19px]">Make any changes</p>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70 }}
          />
          <p className="text-white">Choose File No file</p>
        </div>
        <div>
          <p className="text-white mb-4 mt-7">Name</p>
          <input
            placeholder="Enter your name"
            className="text-gray-200 outline-none border-none w-[90%] p-2 rounded bg-zinc-900"
            value={"Sulayman Kendor"}
          />

          <p className="text-white mt-8 mb-3">Bio</p>
          <textarea
            value={"I love Coding 🚀"}
            className="bg-zinc-900 text-gray-200 w-[90%] mt-2 rounded p-3 max-h-52 min-h-[208px] outline-none"
          />
        </div>
      </section>
    </section>
  );
}

export default EditProfile;
