import React from "react";
import Carousel from "../Carousel";

const BasedosHistorico = () =>{

  return (

    <>
      <div className="xl:container mx-auto px-10">
          <div className="full-width px-0">
              <div className="flex items-center">
                <h1 className="text-2xl mr-4">Baseada na sua última visita </h1>
                <a href="" className="text-base text-blue-500">Ver histórico</a>
              </div>
          </div>
      </div>
      
      <div className="full-width swipper-custom-carousel mb-14">
          <Carousel />
      </div>
      <div className="xl:container mx-auto px-10">
          <div className="full-width px-0">
              <div className="flex items-center">
                <h1 className="text-2xl mr-4">Relacionado com as visitas em Casa, Móveis e Decoração </h1>
                <a href="" className="text-base text-blue-500">Ver histórico</a>
              </div>
          </div>
      </div>
      
      <div className="full-width swipper-custom-carousel mb-14">
          <Carousel />
      </div>
      <div className="xl:container mx-auto px-10">
          <div className="full-width px-0">
              <div className="flex items-center">
                <h1 className="text-2xl mr-4">Ofertas do dia </h1>
                <a href="" className="text-base text-blue-500">Ver todos</a>
              </div>
          </div>
      </div>
      
      <div className="full-width swipper-custom-carousel mb-14">
          <Carousel />
      </div>
    </>

  )

}

export default BasedosHistorico;