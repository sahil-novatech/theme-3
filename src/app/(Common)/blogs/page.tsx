import BlogHead from "@/components/BlogList/BlogHead";
import Blogs from "@/components/BlogList/Blogs";

export default function BlogPage() {
  return (
    <>
      <BlogHead />
      <div className="flex flex-col gap-8 ps-[30px] pe-[30px]">
        <Blogs />
      </div>
    </>
  )
}