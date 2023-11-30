import SimilarMinds from "./similar-minds/SimilarMinds";
import SuggestedCommunities from "./suggested-communities/SuggestedCommunities";

function Suggestions() {
  return (
    <section className="bg-zinc-900 w-[520px] h-[93vh]">
      <SuggestedCommunities />
      <SimilarMinds />
    </section>
  );
}

export default Suggestions;
