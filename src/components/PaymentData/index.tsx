import React from "react";

const PaymentData = () =>{

  return (
    <>
      <div className="xl:container py-10 mx-auto px-10">
        <div className="grid grid-cols-4 shadow-custom relative gap-6 py-3 rounded px-4 bg-white">
           <div className="absolute h-full left-1 w-1 border-t-2 border-t-white border-b-2 border-b-white bg-blue-600 opacity-90"/>
            <div className="w-full border-r py-2">
              <h3 className="text-lg opacity-80">Pagamento rápido e seguro</h3>
              <span className="text-sm opacity-60 relative bottom-1">com Mercado Pago</span>
            </div>
            <div className="w-full flex gap-2 py-2">
              <img className="mr-2" src="img/credit-card.svg" alt="credito" />
              <div className="w-full">
                <h3 className="text-lg opacity-80">Até 10x sem juros</h3>
                <a href="" className="text-sm 80 relative bottom-1 text-blue-500">Ver mais</a>
              </div>
            </div>
            <div className="w-full flex gap-2 py-2">
              <img className="mr-2" src="img/mercado-creditsv2.svg" alt="credito" />
              <div className="w-full">
                <h3 className="text-lg opacity-80">Parcelamento sem cartão</h3>
                <a href="" className="text-sm 80 relative bottom-1 text-blue-500">Conheça o Mercado Crédito</a>
              </div>
            </div>
            <div className="w-full flex items-center  gap-2 py-2">
              <img className="mr-2" src="img/qr.svg" alt="qrcode" />
              <div className="w-full">
                <h3 className="text-lg opacity-80">Via Pix</h3>
                <a href="" className="text-sm 80 relative bottom-1 text-blue-500">Ver mais</a>
              </div>
              <a href="" className="contents">
                <img className="mr-2" src="img/view-more.svg" alt="qrcode" />
              </a>
            </div>
        </div>
      </div>
    </>
  )

}

export default PaymentData;