"use client"
// import { useQuery } from "@tanstack/react-query";
// import { globalServices } from "@/services/global.services";
import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import HomeCardSkeleton from "../Homepage/HomeCardSkeleton";
import { BlogData } from "@/src/types/blog";
import BlogDetailCard from "./BlogDetailCard";

// function fetchBlogs() {
//   // const data =  await globalServices.getAll(`/public/blogs?page=${page}&limit=24`)
//   // console.log(data,"datadaa")
//   return {
//     "data": {
//         "total": 28,
//         "blogs": {
//             "current_page": 1,
//             "first_page_url": "https://trreb.novacrm.ca/api/v1/public/blogs?page=1",
//             "from": 1,
//             "next_page_url": "https://trreb.novacrm.ca/api/v1/public/blogs?page=2",
//             "path": "https://trreb.novacrm.ca/api/v1/public/blogs",
//             "per_page": "24",
//             "prev_page_url": null,
//             "to": 24
//         }
//     },
//     "status": 200,
//     "statusText": "",
//     "headers": {
//         "cache-control": "no-cache, private",
//         "content-type": "application/json"
//     },
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "adapter": [
//             "xhr",
//             "http",
//             "fetch"
//         ],
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {},
//         "headers": {
//             "Accept": "application/json, text/plain, */*"
//         },
//         "baseURL": "https://trreb.novacrm.ca/api/v1",
//         "method": "get",
//         "url": "/public/blogs?page=1&limit=24"
//     },
//     "request": {}
//   }
// }

export default function Blogs() {
  // const [page, setPage] = useState(1);
  const [blogsData] = useState<BlogData[]>([
    {
        "title": "How to Sell Your Home Faster: Top Tips for a Successful Sale",
        "content": "Selling a home is an exciting process, but it can be overwhelming if you don’t know where to start. In this post, you can offer tips on how sellers can prepare their homes for a quick sale",
        "posted_at": "2025-01-20T14:23:31.916000Z",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/C11957766/thumbnail/4542c1db-192f-41f7-93ae-fbf090fa75be-t.jpg",
        "user_id": 769,
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-20T14:23:32.059000Z",
        "created_at": "2025-01-20T14:23:32.059000Z",
        "id": "678e5c64381399e6260ba382",
        "image": null
    },
    {
        "title": "A Step-by-Step Guide to Renting Your Property: Everything You Need to Know",
        "content": "<p>Ocean Water</p>",
        "posted_at": "2025-01-21T14:37:27.165000Z",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957774/thumbnail/e02b6bd3-a461-472d-bcb0-bdb643ee5603-t.jpg",
        "user_id": 17,
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-21T14:37:28.096000Z",
        "created_at": "2025-01-21T14:37:28.096000Z",
        "id": "678fb12854885c23e2014a42",
        "image": null
    },
    {
        "title": "Why Renting Could Be a Better Option for You: Benefits of Renting Over Buying",
        "content": "<p>test</p>",
        "posted_at": "2025-01-21T18:53:02.125000Z",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W9395209/thumbnail/02976bc4-99d1-403c-9f82-7beba27ea8ca-t.jpg",
        "user_id": 60,
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-21T18:53:02.406000Z",
        "created_at": "2025-01-21T18:53:02.406000Z",
        "id": "678fed0e391527856f076fe2",
        "image": null
    },
    {
        "title": "The Best Time to Sell Your Home: Market Trends to Watch",
        "content": "<p><i><strong>test sdcs</strong></i></p>",
        "posted_at": "2025-01-21T18:53:23.641000Z",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/C11947139/thumbnail/ae959061-69de-47d3-adcb-0406a0f5ec60-t.jpg",
        "user_id": 60,
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-21T18:53:23.843000Z",
        "created_at": "2025-01-21T18:53:23.843000Z",
        "id": "678fed23ea19cb509006bae2",
        "image": null
    },
    {
        "title": "Top 10 Things to Look for When Renting a Home",
        "content": "<p>Hi this is the content for blog</p>",
        "posted_at": "2025-01-21T19:15:56.113000Z",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/N11938765/thumbnail/6df32e86-5478-4946-97ca-daaa21454e49-t.jpg",
        "user_id": 17,
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-21T19:15:56.219000Z",
        "created_at": "2025-01-21T19:15:56.219000Z",
        "id": "678ff26c2c0051f74e04ca32",
        "image": null
    },
    {
        "title": "The Dos and Don’ts of Selling Your Property: What Every Seller Should Know",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nisl eu enim volutpat, sed pharetra lacus scelerisque. Curabitur molestie nisl nec odio varius, a facilisis odio posuere. Sed accumsan, orci eget bibendum rhoncus, turpis nulla fringilla lorem, nec elementum arcu sapien in urna. In scelerisque consectetur malesuada. Aenean ultricies mauris ligula, a sollicitudin felis lobortis vel. Fusce malesuada varius metus, ut cursus justo consectetur non. Pellentesque dapibus, massa non volutpat consectetur, magna leo tristique lorem, in sollicitudin metus nulla id augue. Suspendisse potenti. Proin ut feugiat justo.\\n\\nVivamus nec tellus velit. Suspendisse quis orci lacinia, aliquam orci id, vehicula ante. Cras eget orci ligula. Quisque eget ligula eget ipsum faucibus hendrerit. Vestibulum vehicula consectetur orci. In vel nunc hendrerit, consectetur felis vel, bibendum ex. Morbi euismod eros a eros faucibus, eu hendrerit turpis sagittis. Nunc porttitor justo eget erat elementum feugiat. Etiam ut lacus quam.\\n\\nSubheading Level 2\\nUt suscipit, tortor quis varius ultricies, ipsum metus dapibus quam, et consectetur odio sapien at dui. Aenean semper vehicula leo, et volutpat lectus accumsan et. Mauris ac purus a mi laoreet scelerisque. Praesent malesuada tincidunt gravida. Pellentesque ac erat lacus. Nullam ultricies efficitur neque at fringilla. Nunc consequat turpis felis, nec tincidunt nunc fringilla nec. Morbi ut lectus quam.\\n\\n\\n    Item one in an unordered list\\n    Item two in an unordered list\\n    Item three in an unordered list\\n\\n\\n\\n    First item in an ordered list\\n    Second item in an ordered list\\n    Third item in an ordered list\\n\\n\\n\\n    \\&quot;A famous quote about perseverance and determination.\\&quot; - Unknown Author\\n\\n\\nSubheading Level 3\\nNam tristique auctor mauris ut ullamcorper. Suspendisse potenti. Nunc bibendum est at nunc faucibus, sit amet malesuada est pharetra. Vivamus vestibulum erat orci. Quisque bibendum quam et egestas lobortis. In vestibulum tellus et lorem vulputate, sit amet ultrices urna gravida. Proin blandit pretium velit, non accumsan libero ullamcorper nec.\\n\\n\\n    \\n        \\n            Column 1\\n            Column 2\\n            Column 3\\n        \\n    \\n    \\n        \\n            Data 1\\n            Data 2\\n            Data 3\\n        \\n        \\n            Data 4\\n            Data 5\\n            Data 6\\n        \\n    \\n\\n\\nFusce dictum ultricies magna, a volutpat nunc facilisis at. Nam iaculis urna a augue dictum, ut sagittis lacus varius. Nulla fringilla feugiat orci, vitae luctus ipsum ultricies nec. Suspendisse at vestibulum elit. Morbi vehicula neque sed nisi bibendum, ac luctus velit pulvinar.\\n\\nAenean sollicitudin, magna vel vulputate placerat, quam arcu tincidunt erat, non consectetur nisl urna a lacus. Curabitur consequat nisl ut arcu auctor hendrerit. Cras ultricies lacinia diam a sollicitudin. Vestibulum id libero id odio pellentesque ullamcorper. Nulla facilisi. Curabitur in quam eget neque blandit tempor. Cras vitae sem hendrerit, vehicula nunc nec, feugiat turpis. Curabitur ac luctus est, ac aliquet nibh.\\n\\nSed auctor vestibulum augue, a imperdiet orci. Morbi cursus vehicula hendrerit. Nam auctor massa non ligula cursus porttitor. Pellentesque rutrum odio nec turpis dapibus, at tempus urna blandit. Praesent dictum sagittis augue, at dapibus lorem elementum fermentum. Integer blandit mauris eu tristique blandit.",
        "posted_at": "2025-01-29T19:15:07.198000Z",
        "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738178107_file-example-jpg-100kb.jpg",
        "user_id": "6793719ba0f09ef7af018152",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738178107_file-example-jpg-100kb.jpg",
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-29T19:15:07.499000Z",
        "created_at": "2025-01-29T19:15:07.499000Z",
        "id": "679a7e3b39a5d1f122035374"
    },
    {
        "title": "Understanding the Lease Agreement: A Guide for New Renters",
        "content": "blue water",
        "posted_at": "2025-01-29T19:16:56.194000Z",
        "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738178216_100kb.jpg",
        "user_id": "6793719ba0f09ef7af018152",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738178216_100kb.jpg",
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-29T19:16:56.497000Z",
        "created_at": "2025-01-29T19:16:56.497000Z",
        "id": "679a7ea87d22f445e304e7d3"
    },
    {
        "title": "How to Find Your Dream Rental Home: Tips for First-Time Renters",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nisl eu enim volutpat, sed pharetra lacus scelerisque. Curabitur molestie nisl nec odio varius, a facilisis odio posuere. Sed accumsan, orci eget bibendum rhoncus, turpis nulla fringilla lorem, nec elementum arcu sapien in urna. In scelerisque consectetur malesuada. Aenean ultricies mauris ligula, a sollicitudin felis lobortis vel. Fusce malesuada varius metus, ut cursus justo consectetur non. Pellentesque dapibus, massa non volutpat consectetur, magna leo tristique lorem, in sollicitudin metus nulla id augue. Suspendisse potenti. Proin ut feugiat justo.\\n\\nVivamus nec tellus velit. Suspendisse quis orci lacinia, aliquam orci id, vehicula ante. Cras eget orci ligula. Quisque eget ligula eget ipsum faucibus hendrerit. Vestibulum vehicula consectetur orci. In vel nunc hendrerit, consectetur felis vel, bibendum ex. Morbi euismod eros a eros faucibus, eu hendrerit turpis sagittis. Nunc porttitor justo eget erat elementum feugiat. Etiam ut lacus quam.\\n\\nSubheading Level 2\\nUt suscipit, tortor quis varius ultricies, ipsum metus dapibus quam, et consectetur odio sapien at dui. Aenean semper vehicula leo, et volutpat lectus accumsan et. Mauris ac purus a mi laoreet scelerisque. Praesent malesuada tincidunt gravida. Pellentesque ac erat lacus. Nullam ultricies efficitur neque at fringilla. Nunc consequat turpis felis, nec tincidunt nunc fringilla nec. Morbi ut lectus quam.\\n\\n\\n Item one in an unordered list\\n Item two in an unordered list\\n Item three in an unordered list\\n\\n\\n\\n First item in an ordered list\\n Second item in an ordered list\\n Third item in an ordered list\\n\\n\\n\\n \\&quot;A famous quote about perseverance and determination.\\&quot; - Unknown Author\\n\\n\\nSubheading Level 3\\nNam tristique auctor mauris ut ullamcorper. Suspendisse potenti. Nunc bibendum est at nunc faucibus, sit amet malesuada est pharetra. Vivamus vestibulum erat orci. Quisque bibendum quam et egestas lobortis. In vestibulum tellus et lorem vulputate, sit amet ultrices urna gravida. Proin blandit pretium velit, non accumsan libero ullamcorper nec.\\n\\n\\n \\n \\n Column 1\\n Column 2\\n Column 3\\n \\n \\n \\n \\n Data 1\\n Data 2\\n Data 3\\n \\n \\n Data 4\\n Data 5\\n Data 6\\n \\n \\n\\n\\nFusce dictum ultricies magna, a volutpat nunc facilisis at. Nam iaculis urna a augue dictum, ut sagittis lacus varius. Nulla fringilla feugiat orci, vitae luctus ipsum ultricies nec. Suspendisse at vestibulum elit. Morbi vehicula neque sed nisi bibendum, ac luctus velit pulvinar.\\n\\nAenean sollicitudin, magna vel vulputate placerat, quam arcu tincidunt erat, non consectetur nisl urna a lacus. Curabitur consequat nisl ut arcu auctor hendrerit. Cras ultricies lacinia diam a sollicitudin. Vestibulum id libero id odio pellentesque ullamcorper. Nulla facilisi. Curabitur in quam eget neque blandit tempor. Cras vitae sem hendrerit, vehicula nunc nec, feugiat turpis. Curabitur ac luctus est, ac aliquet nibh.\\n\\nSed auctor vestibulum augue, a imperdiet orci. Morbi cursus vehicula hendrerit. Nam auctor massa non ligula cursus porttitor. Pellentesque rutrum odio nec turpis dapibus, at tempus urna blandit. Praesent dictum sagittis augue, at dapibus lorem elementum fermentum. Integer blandit mauris eu tristique blandit.",
        "posted_at": "2025-01-29T19:34:58.864000Z",
        "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738179298_100kb.jpg",
        "user_id": "6793719ba0f09ef7af018152",
        "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738179299_100kb.jpg",
        "slug": "How-to-Sell-Your-Home-Faster",
        "updated_at": "2025-01-29T19:34:59.153000Z",
        "created_at": "2025-01-29T19:34:59.153000Z",
        "id": "679a82e37d22f445e304e7d4"
    }
]);
  // const [hasMorePage] = useState(false);
  // const [total] = useState(0);

  // const blogs = fetchBlogs()

  // useEffect(() => {
  //   if(blogs?.data?.blogs?.data){
  //     // setHasMorePage(!!blogs.data.data.blogs.next_page_url)
  //     setTotal(blogs.data.total);
  //     setBlogsData(blogs.data.blogs.data)
  //   }
  // }, [])

  return (
    <div className="w-full mt-6">
      {blogsData.length > 0 && <div className="flex items-start justify-between wow animate__animated animate__fadeInUp">
        <div>
          {/* {blogs?.isLoading ? <></>
            : <> */}
              <p className="font-bold text-[20px]">{`Total 28 Blogs Found`}</p>
            {/* </>
          } */}
        </div>
      </div>}

      <div id="scrollable" className="mt-6" style={{ maxHeight: '2000px', overflow: 'auto'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
            {blogsData.map((blogs: BlogData) => <BlogDetailCard key={blogs.id} blog={blogs} />)}
          </div>
          {/* </InfiniteScroll>
        } */}
        {/* {blogsData.length === 0 && (blogs?.isLoading ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-5 mb-5">
            <HomeCardSkeleton />
            <HomeCardSkeleton />
            <HomeCardSkeleton />
            <HomeCardSkeleton />
          </div>
          : <div className="font-semibold text-center mt-10 mb-10">Oops! sorry No exact matches Found</div>)
        } */}
      </div>
      <div className="flex justify-center">
        {/* <Pagination variant="light" color="default" loop showShadow radius="full" className="mt-5 mb-5" showControls initialPage={1} total={10} /> */}
      </div>
    </div>
  )
}