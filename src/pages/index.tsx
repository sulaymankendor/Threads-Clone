import Thread from "@/components/home/Thread";

export default function Home() {
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <h1 className="text-white text-2xl font-bold w-[90%] my-8">Home</h1>
      <Thread />
      <Thread />
      <Thread />
      <Thread />
      <Thread />
      <Thread />
    </section>
  );
}
