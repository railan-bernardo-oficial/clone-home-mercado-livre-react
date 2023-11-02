import React from "react";

const Card = ({ image }) =>{

  return (
    <>
      <div className=" bg-white rounded-md shadow-custom overflow-hidden hover:shadow-custom-hover transition-shadow">
        <a href="">
          <div className="w-full h-56 mb-1 border-b">
            <img className="w-full h-full" src={image} alt="produto" />
          </div>
          <div className="px-3 pt-2 pb-8">
             <p className="text-sm text-zinc-900 opacity-90">Cama Infantil Montessoriana Solteiro Liz Yescasa</p>
             <span className="line-through text-xs text-zinc-800 opacity-60">R$ 489,90</span>
             <p className="flex items-center mb-1">
              <span className="text-2xl relative">R$ 436<sup className="text-xs absolute top-1 -right-4">01</sup></span>
              <span className="text-sm text-green-400 ml-5">11% OFF</span>
              </p>
              <p className="text-sm">
                <span>em</span>
                <span className="text-green-400 ml-1">10x R$ 43,60 sem juros</span>
              </p>
          </div>
        </a>
      </div>
    </>
  )

}

export default Card;