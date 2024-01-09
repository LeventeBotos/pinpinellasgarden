import UserPosts from "@/app/UserPosts";
import Posts from "./Posts";

const page = () => {
  return (
    <div className="flex flex-col gap-3 p-3 md:p-5 min-h-screen items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold gradient">
        Hiya, my name is Levente Botos
      </h1>
      <UserPosts name="Levente Botos" />
    </div>
  );
};

export default page;
