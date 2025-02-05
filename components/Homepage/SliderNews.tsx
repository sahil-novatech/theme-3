'use client';
import React from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from '../Heading';
import styles from '@/styles/Homepage/SliderNews.module.scss';
import { Navigation } from 'swiper/modules';
// import { globalServices } from "@/services/global.services";
import { useQuery } from "@tanstack/react-query";
import { BlogData } from "@/src/types/blog";
import BlogDetailCard from "../BlogList/BlogDetailCard";
import { Button } from "@nextui-org/react";
// import { useGlobalContext } from "@/context/GlobalContext";

// interface SlideContent {
//   image: string;
//   title: string;
//   date?: string;
//   description?: string;
//   socialLinks?: string[];
//   role?: string;
// }

// interface SliderNewsProps {
//   expert?: boolean;
// }

// const blogSlides: SlideContent[] = [
//   {
//     image: '/images/blog/blog-grid-1.jpg',
//     title: "Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors",
//     date: 'April 26, 2024',
//     description: 'Tips & Tricks',
//   },
//   {
//     image: '/images/blog/blog-grid-2.jpg',
//     title: 'Homebuyers Will Be So Thankful To Hear These',
//     date: 'April 26, 2024',
//     description: 'Tips & Tricks',
//   },
//   {
//     image: '/images/blog/blog-grid-3.jpg',
//     title: "That’s Life! Frank Sinatra’s Former Los Angeles-Area",
//     date: 'April 26, 2024',
//     description: 'Tips & Tricks',
//   },
//   {
//     image: '/images/blog/blog-grid-4.jpg',
//     title: 'Affordability crisis buyers and renters turn to tiny living',
//     date: 'April 26, 2024',
//     description: 'Tips & Tricks',
//   },
// ];

// const expertSlides: SlideContent[] = [
//   {
//     image: '/images/image-box/experts-1.jpg',
//     title: 'Eleanor Pena',
//     role: 'Medical Assistant',
//     socialLinks: ['flaticon-facebook', 'flaticon-twitter', 'flaticon-instagram', 'flaticon-linkedin'],
//   },
//   {
//     image: '/images/image-box/experts-2.jpg',
//     title: 'Leslie Alexander',
//     role: 'Marketing Coordinator',
//     socialLinks: ['flaticon-facebook', 'flaticon-twitter', 'flaticon-instagram', 'flaticon-linkedin'],
//   },
//   {
//     image: '/images/image-box/experts-3.jpg',
//     title: 'Wade Warren',
//     role: 'President of Sales',
//     socialLinks: ['flaticon-facebook', 'flaticon-twitter', 'flaticon-instagram', 'flaticon-linkedin'],
//   },
//   {
//     image: '/images/image-box/experts-4.jpg',
//     title: 'Kathryn Murphy',
//     role: 'Web Designer',
//     socialLinks: ['flaticon-facebook', 'flaticon-twitter', 'flaticon-instagram', 'flaticon-linkedin'],
//   },
// ];

async function fetchBlogs() {
  // const abc = await globalServices.getAll(`/public/blogs`)
  // console.log(abc,"hello world")
  return {
    "data": {
        "total": 28,
        "blogs": {
            "current_page": 1,
            "data": [
                {
                    "title": "This is title",
                    "content": "<p>This is post content</p>",
                    "posted_at": "2025-01-20T14:23:31.916000Z",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/C11957766/thumbnail/4542c1db-192f-41f7-93ae-fbf090fa75be-t.jpg",
                    "user_id": 769,
                    "slug": "this-is-title",
                    "updated_at": "2025-01-20T14:23:32.059000Z",
                    "created_at": "2025-01-20T14:23:32.059000Z",
                    "id": "678e5c64381399e6260ba382",
                    "image": null
                },
                {
                    "title": "new blog",
                    "content": "<p>Ocean Water</p>",
                    "posted_at": "2025-01-21T14:37:27.165000Z",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/X11957774/thumbnail/e02b6bd3-a461-472d-bcb0-bdb643ee5603-t.jpg",
                    "user_id": 17,
                    "slug": "new-blog",
                    "updated_at": "2025-01-21T14:37:28.096000Z",
                    "created_at": "2025-01-21T14:37:28.096000Z",
                    "id": "678fb12854885c23e2014a42",
                    "image": null
                },
                {
                    "title": "test",
                    "content": "<p>test</p>",
                    "posted_at": "2025-01-21T18:53:02.125000Z",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/W9395209/thumbnail/02976bc4-99d1-403c-9f82-7beba27ea8ca-t.jpg",
                    "user_id": 60,
                    "slug": "test",
                    "updated_at": "2025-01-21T18:53:02.406000Z",
                    "created_at": "2025-01-21T18:53:02.406000Z",
                    "id": "678fed0e391527856f076fe2",
                    "image": null
                },
                {
                    "title": "Test Blog",
                    "content": "<p><i><strong>test sdcs</strong></i></p>",
                    "posted_at": "2025-01-21T18:53:23.641000Z",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/C11947139/thumbnail/ae959061-69de-47d3-adcb-0406a0f5ec60-t.jpg",
                    "user_id": 60,
                    "slug": "test-blog",
                    "updated_at": "2025-01-21T18:53:23.843000Z",
                    "created_at": "2025-01-21T18:53:23.843000Z",
                    "id": "678fed23ea19cb509006bae2",
                    "image": null
                },
                {
                    "title": "My Blog for IDX",
                    "content": "<p>Hi this is the content for blog</p>",
                    "posted_at": "2025-01-21T19:15:56.113000Z",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/N11938765/thumbnail/6df32e86-5478-4946-97ca-daaa21454e49-t.jpg",
                    "user_id": 17,
                    "slug": "my-blog-for-idx",
                    "updated_at": "2025-01-21T19:15:56.219000Z",
                    "created_at": "2025-01-21T19:15:56.219000Z",
                    "id": "678ff26c2c0051f74e04ca32",
                    "image": null
                },
                {
                    "title": "new blog 12",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nisl eu enim volutpat, sed pharetra lacus scelerisque. Curabitur molestie nisl nec odio varius, a facilisis odio posuere. Sed accumsan, orci eget bibendum rhoncus, turpis nulla fringilla lorem, nec elementum arcu sapien in urna. In scelerisque consectetur malesuada. Aenean ultricies mauris ligula, a sollicitudin felis lobortis vel. Fusce malesuada varius metus, ut cursus justo consectetur non. Pellentesque dapibus, massa non volutpat consectetur, magna leo tristique lorem, in sollicitudin metus nulla id augue. Suspendisse potenti. Proin ut feugiat justo.\\n\\nVivamus nec tellus velit. Suspendisse quis orci lacinia, aliquam orci id, vehicula ante. Cras eget orci ligula. Quisque eget ligula eget ipsum faucibus hendrerit. Vestibulum vehicula consectetur orci. In vel nunc hendrerit, consectetur felis vel, bibendum ex. Morbi euismod eros a eros faucibus, eu hendrerit turpis sagittis. Nunc porttitor justo eget erat elementum feugiat. Etiam ut lacus quam.\\n\\nSubheading Level 2\\nUt suscipit, tortor quis varius ultricies, ipsum metus dapibus quam, et consectetur odio sapien at dui. Aenean semper vehicula leo, et volutpat lectus accumsan et. Mauris ac purus a mi laoreet scelerisque. Praesent malesuada tincidunt gravida. Pellentesque ac erat lacus. Nullam ultricies efficitur neque at fringilla. Nunc consequat turpis felis, nec tincidunt nunc fringilla nec. Morbi ut lectus quam.\\n\\n\\n    Item one in an unordered list\\n    Item two in an unordered list\\n    Item three in an unordered list\\n\\n\\n\\n    First item in an ordered list\\n    Second item in an ordered list\\n    Third item in an ordered list\\n\\n\\n\\n    \\&quot;A famous quote about perseverance and determination.\\&quot; - Unknown Author\\n\\n\\nSubheading Level 3\\nNam tristique auctor mauris ut ullamcorper. Suspendisse potenti. Nunc bibendum est at nunc faucibus, sit amet malesuada est pharetra. Vivamus vestibulum erat orci. Quisque bibendum quam et egestas lobortis. In vestibulum tellus et lorem vulputate, sit amet ultrices urna gravida. Proin blandit pretium velit, non accumsan libero ullamcorper nec.\\n\\n\\n    \\n        \\n            Column 1\\n            Column 2\\n            Column 3\\n        \\n    \\n    \\n        \\n            Data 1\\n            Data 2\\n            Data 3\\n        \\n        \\n            Data 4\\n            Data 5\\n            Data 6\\n        \\n    \\n\\n\\nFusce dictum ultricies magna, a volutpat nunc facilisis at. Nam iaculis urna a augue dictum, ut sagittis lacus varius. Nulla fringilla feugiat orci, vitae luctus ipsum ultricies nec. Suspendisse at vestibulum elit. Morbi vehicula neque sed nisi bibendum, ac luctus velit pulvinar.\\n\\nAenean sollicitudin, magna vel vulputate placerat, quam arcu tincidunt erat, non consectetur nisl urna a lacus. Curabitur consequat nisl ut arcu auctor hendrerit. Cras ultricies lacinia diam a sollicitudin. Vestibulum id libero id odio pellentesque ullamcorper. Nulla facilisi. Curabitur in quam eget neque blandit tempor. Cras vitae sem hendrerit, vehicula nunc nec, feugiat turpis. Curabitur ac luctus est, ac aliquet nibh.\\n\\nSed auctor vestibulum augue, a imperdiet orci. Morbi cursus vehicula hendrerit. Nam auctor massa non ligula cursus porttitor. Pellentesque rutrum odio nec turpis dapibus, at tempus urna blandit. Praesent dictum sagittis augue, at dapibus lorem elementum fermentum. Integer blandit mauris eu tristique blandit.",
                    "posted_at": "2025-01-29T19:15:07.198000Z",
                    "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738178107_file-example-jpg-100kb.jpg",
                    "user_id": "6793719ba0f09ef7af018152",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738178107_file-example-jpg-100kb.jpg",
                    "slug": "new-blog-12",
                    "updated_at": "2025-01-29T19:15:07.499000Z",
                    "created_at": "2025-01-29T19:15:07.499000Z",
                    "id": "679a7e3b39a5d1f122035374"
                },
                {
                    "title": "new blue",
                    "content": "blue water",
                    "posted_at": "2025-01-29T19:16:56.194000Z",
                    "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738178216_100kb.jpg",
                    "user_id": "6793719ba0f09ef7af018152",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738178216_100kb.jpg",
                    "slug": "new-blue",
                    "updated_at": "2025-01-29T19:16:56.497000Z",
                    "created_at": "2025-01-29T19:16:56.497000Z",
                    "id": "679a7ea87d22f445e304e7d3"
                },
                {
                    "title": "Test Blog 1234",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula nisl eu enim volutpat, sed pharetra lacus scelerisque. Curabitur molestie nisl nec odio varius, a facilisis odio posuere. Sed accumsan, orci eget bibendum rhoncus, turpis nulla fringilla lorem, nec elementum arcu sapien in urna. In scelerisque consectetur malesuada. Aenean ultricies mauris ligula, a sollicitudin felis lobortis vel. Fusce malesuada varius metus, ut cursus justo consectetur non. Pellentesque dapibus, massa non volutpat consectetur, magna leo tristique lorem, in sollicitudin metus nulla id augue. Suspendisse potenti. Proin ut feugiat justo.\\n\\nVivamus nec tellus velit. Suspendisse quis orci lacinia, aliquam orci id, vehicula ante. Cras eget orci ligula. Quisque eget ligula eget ipsum faucibus hendrerit. Vestibulum vehicula consectetur orci. In vel nunc hendrerit, consectetur felis vel, bibendum ex. Morbi euismod eros a eros faucibus, eu hendrerit turpis sagittis. Nunc porttitor justo eget erat elementum feugiat. Etiam ut lacus quam.\\n\\nSubheading Level 2\\nUt suscipit, tortor quis varius ultricies, ipsum metus dapibus quam, et consectetur odio sapien at dui. Aenean semper vehicula leo, et volutpat lectus accumsan et. Mauris ac purus a mi laoreet scelerisque. Praesent malesuada tincidunt gravida. Pellentesque ac erat lacus. Nullam ultricies efficitur neque at fringilla. Nunc consequat turpis felis, nec tincidunt nunc fringilla nec. Morbi ut lectus quam.\\n\\n\\n Item one in an unordered list\\n Item two in an unordered list\\n Item three in an unordered list\\n\\n\\n\\n First item in an ordered list\\n Second item in an ordered list\\n Third item in an ordered list\\n\\n\\n\\n \\&quot;A famous quote about perseverance and determination.\\&quot; - Unknown Author\\n\\n\\nSubheading Level 3\\nNam tristique auctor mauris ut ullamcorper. Suspendisse potenti. Nunc bibendum est at nunc faucibus, sit amet malesuada est pharetra. Vivamus vestibulum erat orci. Quisque bibendum quam et egestas lobortis. In vestibulum tellus et lorem vulputate, sit amet ultrices urna gravida. Proin blandit pretium velit, non accumsan libero ullamcorper nec.\\n\\n\\n \\n \\n Column 1\\n Column 2\\n Column 3\\n \\n \\n \\n \\n Data 1\\n Data 2\\n Data 3\\n \\n \\n Data 4\\n Data 5\\n Data 6\\n \\n \\n\\n\\nFusce dictum ultricies magna, a volutpat nunc facilisis at. Nam iaculis urna a augue dictum, ut sagittis lacus varius. Nulla fringilla feugiat orci, vitae luctus ipsum ultricies nec. Suspendisse at vestibulum elit. Morbi vehicula neque sed nisi bibendum, ac luctus velit pulvinar.\\n\\nAenean sollicitudin, magna vel vulputate placerat, quam arcu tincidunt erat, non consectetur nisl urna a lacus. Curabitur consequat nisl ut arcu auctor hendrerit. Cras ultricies lacinia diam a sollicitudin. Vestibulum id libero id odio pellentesque ullamcorper. Nulla facilisi. Curabitur in quam eget neque blandit tempor. Cras vitae sem hendrerit, vehicula nunc nec, feugiat turpis. Curabitur ac luctus est, ac aliquet nibh.\\n\\nSed auctor vestibulum augue, a imperdiet orci. Morbi cursus vehicula hendrerit. Nam auctor massa non ligula cursus porttitor. Pellentesque rutrum odio nec turpis dapibus, at tempus urna blandit. Praesent dictum sagittis augue, at dapibus lorem elementum fermentum. Integer blandit mauris eu tristique blandit.",
                    "posted_at": "2025-01-29T19:34:58.864000Z",
                    "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738179298_100kb.jpg",
                    "user_id": "6793719ba0f09ef7af018152",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738179299_100kb.jpg",
                    "slug": "test-blog-1234",
                    "updated_at": "2025-01-29T19:34:59.153000Z",
                    "created_at": "2025-01-29T19:34:59.153000Z",
                    "id": "679a82e37d22f445e304e7d4"
                },
                {
                    "title": "adfasdfasdf",
                    "content": "Hello This is blue ocean.&amp;nbsp;234232342342342342342342454564564645645646464545645645sdfgsdfg",
                    "posted_at": "2025-01-29T21:04:51.061000Z",
                    "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738184691_100kb.jpg",
                    "user_id": "6793719ba0f09ef7af018152",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738184691_100kb.jpg",
                    "slug": "adfasdfasdf",
                    "updated_at": "2025-01-29T21:04:52.204000Z",
                    "created_at": "2025-01-29T21:04:52.204000Z",
                    "id": "679a97f43e5b0cccfd068bf2"
                },
                {
                    "title": "new blog blue whale",
                    "content": "Blog details",
                    "posted_at": "2025-01-29T21:23:35.467000Z",
                    "image": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/1738185815_100kb.jpg",
                    "user_id": "6793719ba0f09ef7af018152",
                    "thumbnail": "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/6793719ba0f09ef7af018152/blogs/images/thumbnails/1738185815_100kb.jpg",
                    "slug": "new-blog-blue-whale",
                    "updated_at": "2025-01-29T21:23:35.782000Z",
                    "created_at": "2025-01-29T21:23:35.782000Z",
                    "id": "679a9c5793bba06f8b0b6572"
                }
            ],
            "first_page_url": "https://trreb.novacrm.ca/api/v1/public/blogs?page=1",
            "from": 1,
            "next_page_url": "https://trreb.novacrm.ca/api/v1/public/blogs?page=2",
            "path": "https://trreb.novacrm.ca/api/v1/public/blogs",
            "per_page": 10,
            "prev_page_url": null,
            "to": 10
        }
    },
    "status": 200,
    "statusText": "",
    "headers": {
        "cache-control": "no-cache, private",
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http",
            "fetch"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Authorization": "Bearer 67a387369517d23c6b0154e2|zO9OlqKy27oMlkl8ngQfrwQd96KULEOLsznK44v76b619126"
        },
        "baseURL": "https://trreb.novacrm.ca/api/v1",
        "method": "get",
        "url": "/public/blogs"
    },
    "request": {}
}
}

export default function SliderNews() {
  const blogs = useQuery({
    queryKey: ['excludedQueryKey', 'blogs'],
    queryFn: () => fetchBlogs(),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <section className={`idx-container ${styles.container}`}>
      <div className={`idx-section`}>
        <Heading title="Blogs" description="" />
        <div>
          {blogs.data && Array.isArray(blogs.data.data.blogs.data) && blogs.data.data.blogs.data.length > 0 ? <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView={3}
            observer={true}
            observeParents={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              }
            }}
          >
            {blogs.data.data.blogs.data.map((slide: BlogData) => 
              <SwiperSlide key={slide.id}>
                <BlogDetailCard blog={slide} />
              </SwiperSlide>
            )}
          </Swiper> : <div className="text-center text-[20px] font-semibold">Blogs not found</div>}
        </div>
        {blogs.data && Array.isArray(blogs.data.data.blogs.data) && blogs.data.data.blogs.data.length > 0 && <div className="flex justify-center mt-[50px]">
          <Button as={Link} className="text-base font-medium shadow-sm py-2\.5 px-8 rounded-full !text-white bg-gray-900" href="/blogs">View All</Button>
        </div>}
      </div>
    </section>
  );
}