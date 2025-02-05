"use client";

import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar";
// import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  const [token] = useState("dummy");

  // useEffect(() => {
  //   const token = typeof localStorage !== "undefined" && localStorage.getItem('token');
  //   if(!token){
  //     router.push("/");
  //   }else{
  //     setToken(token);
  //   }
  // }, [])

  return token === "" ? null : (
    <div className="flex gap-[40px]">
      <Sidebar />
      <div className="flex-grow-[1]">{children}</div>
    </div>
  );
}
