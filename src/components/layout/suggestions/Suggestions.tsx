import SimilarMinds from "./similar-minds/SimilarMinds";
import SuggestedCommunities from "./suggested-communities/SuggestedCommunities";

function Suggestions() {
  return (
    <section className="bg-zinc-900 w-[262px] h-[93vh] max-sm:hidden">
      <SuggestedCommunities />
      <SimilarMinds />
    </section>
  );
}

export default Suggestions;
