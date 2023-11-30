import MyThread from "@/components/profile-components/MyThread";
import ProfileLayout from "@/components/profile-components/ProfileLayout";

function Threads() {
  return (
    <section className="h-[91vh] overflow-y-scroll flex flex-col items-center w-full">
      <ProfileLayout />
      <div className="w-full">
        <MyThread />
        <MyThread />
        <MyThread />
      </div>
    </section>
  );
}

export default Threads;
