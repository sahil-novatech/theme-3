'use client';

// import { globalServices } from "@/services/global.services";
// import { SingleBlogData } from "@/src/types/blog";
// import { useQuery } from "@tanstack/react-query";
import moment from "moment";

// async function fetchBlog() {
//   // const res = await globalServices.getAll(`/blogs/${blogId}`)
//   const res = {
//     "status": 200,
//     "message": "Blog retrieved successfully",
//     "data": {
//         "id": "678fb12854885c23e2014a42",
//         "title": "new blog",
//         "slug": "new-blog",
//         "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy",
//         "image": null,
//         "posted_at": "2025-01-21T14:37:28.096000Z"
//     }
// }
//     console.log(res,"res")
//   return res;
// }

export default function Blog() {
  const blogData = {
    "id": "678fb12854885c23e2014a42",
    "title": "new blog",
    "slug": "new-blog",
    "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy",
    "image": null,
    "posted_at": "2025-01-21T14:37:28.096000Z"
  }
  // const blogData: SingleBlogData = blogs?.data?.data;
  // console.log(blogData,"blogs")
  return (blogData?.id ? 
    <div>
      <img className="rounded-3xl w-full max-h-[75vh] object-cover" src={blogData?.image ?? "/images/image-box/cities-1.jpg"} />
      <div className="flex justify-center">
        <div className="w-full xl:w-[66%] my-[40px]">
          <div className="text-[40px] font-semibold leading-[47px] mb-[12px]">{blogData?.title}</div>
          <div className="text-[#1f4b43] text-[14px] mb-6">{moment(blogData.posted_at).format("MMMM DD, YYYY")}</div>
          {blogData?.content && <div className="mb-6" dangerouslySetInnerHTML={{ __html: blogData.content }} />}
        </div>
      </div>
    </div>
  : null
  )
}