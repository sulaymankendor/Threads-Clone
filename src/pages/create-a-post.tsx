import LoadingButton from "@mui/lab/LoadingButton";

function CreateAPost() {
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">
        Create Post
      </h1>
      <label className="text-gray-200 w-[90%]">Content</label>
      <textarea className="bg-zinc-900 text-gray-200 w-[90%] mt-2 rounded p-3 max-h-52 min-h-[208px] outline-none" />

      <LoadingButton
        // loading={true}
        className="text-[16px] font-bold capitalize bg-violet-600 w-[90%] text-gray-200 hover:bg-violet-500 mt-8"
      >
        Post Thread
      </LoadingButton>
    </section>
  );
}

export default CreateAPost;
