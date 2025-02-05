'use client';
import styles from "@/styles/Dashboard/Profile.module.scss";
import ProfileForm from "./ProfileForms/ProfileForm";
import SocialMediaForm from "./ProfileForms/SocialMediaForm";
import ChangePasswordForm from "./ProfileForms/ChangePasswordForm";
import { useState, useEffect } from "react";
import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Profile() {
  const { setUser } = useGlobalContext();
  const [userData, setUserData] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    status: false,
    updated_at: "",
    created_at: "",
    social_media: {
      facebook_url: "",
      twitter_url: "",
      instagram_url: "",
      linkedin_url: "",
    },
    location: {
      friendly_address: ""
    },
    avatar: "",
    web: "",
    country: "",
    description: ""
  });
  const getUserData = () => {
    globalServices.getAll('/get-profile')
    .then((res) => {
      if(res.data.data.user){
        setUserData(res.data.data.user);
        setUser(res.data.data.user);
      }
    })
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div className="mt-[31px] mb-[5px] text-[26px] leading-[36px] font-semibold">
        My Profiles
      </div>
      <div className="text-[#3d3e3f] mb-[33px]">
        We are glad to see you again!
      </div>
      <div className="flex flex-col gap-8">
        <div className={styles.sectionBox}>
          <h4 className="text-[21px] leading-[30px] font-semibold">Profile Information</h4>
          <ProfileForm userData={userData} />
        </div>
        <div className={styles.sectionBox}>
          <h4 className="text-[21px] leading-[30px] font-semibold">Social Media</h4>
          <SocialMediaForm userData={userData} />
        </div>
        <div className={styles.sectionBox}>
          <h4 className="text-[21px] leading-[30px] font-semibold">Change Password</h4>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
