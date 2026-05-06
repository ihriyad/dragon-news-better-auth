import { redirect } from "next/navigation";

const Home =() => {
 const primaryCategory = "01"
  return (
    redirect(`/category/${primaryCategory}`)
  );
};
export default Home;
