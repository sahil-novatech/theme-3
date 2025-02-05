"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
// import { TbBed } from "react-icons/tb";
// import { IoHomeOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { RiHomeHeartLine } from "react-icons/ri";
import styles from "@/styles/Sidebar.module.scss"
import Swal from "sweetalert2";
import { globalServices } from "@/services/global.services";
import { logout } from "@/utils/common";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setHasToken, setUser } = useGlobalContext();

  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        globalServices.post("/logout")
        .then(() => {
          setUser(null);
          setHasToken(false);
          logout();
          router.push("/");
          Swal.fire({
            title: "Logout!",
            text: "Logout Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((err) => {
          console.log("login error", err)
        });
      }
    });
  }

  return (
    <>
      <div className={styles.leftMenu}>
        <div className="menu-content">
          <ul>
            {/* <li className={`${pathname === "/dashboard" ? styles.active : ""}`}>
              <Link href="/dashboard">
                <TbBed size={20} />
                Dashboard
              </Link>
            </li> */}
            <li
              className={`${
                pathname === "/my-profile" ? styles.active : ""
              }`}
            >
              <Link href="/my-profile">
                <FaRegUser size={20} />
                My Profile
              </Link>
            </li>
            {/* <li
              className={`${
                pathname === "/my-properties" ? styles.active : ""
              }`}
            >
              <Link href="/my-properties">
                <IoHomeOutline size={20} />
                My Properties
              </Link>
            </li> */}
            <li
              className={`${
                pathname === "/my-favorites" ? styles.active : ""
              }`}
            >
              <Link href="/my-favorites">
                <RiHomeHeartLine size={20} />
                My Favorites
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <SlLogout size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
