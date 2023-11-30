import User from "../../../reusable-components/User";

function SimilarMinds() {
  return (
    <div>
      <h1 className="text-gray-200 font-bold text-xl mt-9 ml-3 mb-3">
        Similar Minds
      </h1>
      <div className="h-[43vh] overflow-y-scroll">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default SimilarMinds;
