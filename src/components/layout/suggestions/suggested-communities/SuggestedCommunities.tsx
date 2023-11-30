import Community from "./Community";

function SuggestedCommunities() {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-200 font-bold text-xl mt-3 ml-3">
        Suggested Communities
      </h1>
      <Community />
      <Community />
      <Community />
    </div>
  );
}

export default SuggestedCommunities;
