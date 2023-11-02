import React from "react";
import CardLink from "../CardLink";

const Categorias = () =>{

  return (
    <>
      <div className="xl:container mx-auto px-10 mb-14">
         <div className="full-width px-0">
            <h1 className="text-2xl mr-4 mb-4">Categorias </h1>
            <div className="grid grid-cols-7 bg-white rounded-md shadow-custom">
               <CardLink />
               <CardLink className={`border-x`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink  />
               <CardLink className={`border-x`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink className={`border-r`} />
               <CardLink />
            </div>
         </div>
      </div>
    </>
  )

}

export default Categorias;