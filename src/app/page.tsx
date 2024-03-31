// Import your Client Component
import Thread from "@/components/home/Thread";
import Home from "../components/app-router-client-components/home";

export default async function Page() {
  // Fetch data directly in a Server Component
  //   const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  // return <HomePage recentPosts={recentPosts} />;
  return <Home />;
}
