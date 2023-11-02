import { Hourglass } from "lucide-react";
import React from "react";

const CardLink = ({ className = '' }) =>{

  return (
    <>
      <a href="" className={`border-b h-40 px-3 flex group hover:bg-blue-500 hover:text-white flex-col items-center justify-center ${className}`}>
          <Hourglass width={35} height={35} className="mb-3 text-blue-500 group-hover:text-white" />
          <span className="text-center text-sm">Antiguidades e Coleções</span>
      </a>
    </>
  )

}

export default CardLink;