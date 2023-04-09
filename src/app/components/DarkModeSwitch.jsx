"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsFillSunFill} from "react-icons/bs"


export default function DarkModeSwitch() {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState()

  useEffect(()=>{
    setMounted(true)
  },[]);
  const currentTheme = theme === "syste"? systemTheme : theme;
    
  return (
    <>
      {mounted && currentTheme === "dark"? 
      <BsFillSunFill className="text-xl cursor-pointer hover:text-amber-500"
       onClick={()=>setTheme("light")} />
       : <BsFillMoonStarsFill className="text-xl cursor-pointer hover:text-amber-500"
        onClick={()=>setTheme("dark")} />
        }
    </>
  )
}
