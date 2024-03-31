import ProfileLayout from "@/components/profile-components/ProfileLayout";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" overflow-y-scroll h-[90vh]">
      <ProfileLayout />
      {children}
    </section>
  );
}

export default layout;
