'use client';
import styles from "@/styles/Dashboard/Dashboard.module.scss";
import { MdOutlineOutbox } from "react-icons/md";
import { TbFileTime, TbHomeHeart  } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";
const ChartList = dynamic(() => import('./ChartList'), { ssr: false });

export default function Dashboard() {
  const data = [
    { total: 16, title: 'Published', image: <MdOutlineOutbox size={50} /> },
    { total: 24, title: 'Pending', image: <TbFileTime size={50} /> },
    { total: 39, title: 'Favorites', image: <TbHomeHeart size={50} /> },
    { total: 48, title: 'Reviews', image: <BiCommentDetail size={50} /> },
  ]

  const activities = [
    'Your listing Modern House in Greenville has been approved!.',
    'Kathy Brown left a review on Renovated Apartment',
    'Someone favorites your Gorgeous Villa Bay View listing!',
    'Your listing Luxury Family Home has been approved!',
    'Kathy Brown left a review on Renovated Apartment',
    'Kathy Brown left a review on Renovated Apartment',
  ]

  return (
    <div>
      <div className="mt-[31px] mb-[5px] text-[26px] leading-[36px] font-semibold">
        Hello Ali Tufan
      </div>
      <div className="text-[#3d3e3f] mb-[33px]">
        We are glad to see you again!
      </div>
      <div className={styles.gridSection}>
        {data.length > 0 && data.map((detail) => (
          <div className={`flex items-center justify-between ${styles.gridContent}`} key={detail.title}>
            <div>
              <div className={styles.totalTitle}>{detail.total}</div>
              <div className={styles.titleText}>{detail.title}</div>
            </div>
            <div className={styles.imageContainer}>
              {detail.image}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-5">
        <div className={`${styles.contentBox} w-[66%]`}>
          <h4 className="text-[21px] leading-[30px] font-semibold">View Statistics</h4>
          <ChartList />
        </div>
        <div className={styles.contentBox}>
          <h4 className="text-[21px] leading-[30px] font-semibold">Recent Activities</h4>
          <div className="flex flex-col gap-4 mt-5">
            {activities.map((activity, index) => (
              <div className="flex items-center gap-3" key={activity+index}>
                <div className={styles.dummyImage} />
                <p className="text-[15px]">{activity}</p>
              </div>
            ))}
          </div>
          <Button className="w-full mt-6 border bg-transparent hover:bg-[#d9b75a0d] border-[#e7c873]">View More</Button>
        </div>
      </div>
    </div>
  );
}
