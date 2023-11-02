import React from "react";

const SiteInfo = () =>{

  return (
    <>
      <div className="xl:container mx-auto px-10">
          <div className="grid grid-cols-3 px-4">
              <div className="w-full flex items-center flex-col pt-9 px-11 pb-5">
                  <img className="mb-6" src="img/payment.svg" alt="payment" />
                  <h3 className="text-xl mb-2 opacity-70">Escolha como pagar</h3>
                  <p className="text-center mb-2 opacity-70 text-sm">Com o Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o Mercado Crédito.</p>
                  <a href="" className="text-sm text-blue-500">Como pagar com Mercado Pago</a>
              </div>
              <div className="w-full relative flex items-center flex-col pt-9 px-11 pb-5">
                  <div className="absolute left-0 border-l h-16 top-20 "/>
                  <img className="mb-6" src="img/shipping.svg" alt="payment" />
                  <h3 className="text-xl mb-2 opacity-70">Frete grátis a partir de R$ 79</h3>
                  <p className="text-center mb-2 opacity-70 text-sm">Ao se cadastrar no Mercado Livre, você tem frete grátis em milhares de produtos.</p>
                  <div className="absolute right-0 px-1 border-r top-20 h-16 "/>
              </div>
              <div className="w-full flex items-center flex-col pt-9 px-11 pb-5">
                  <img className="mb-6" src="img/protected.svg" alt="payment" />
                  <h3 className="text-xl mb-2 opacity-70">Segurança, do início ao fim</h3>
                  <p className="text-center mb-2 opacity-70 text-sm">Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido.</p>
                  <a href="" className="text-sm text-blue-500">Como te protegemos</a>
              </div>
          </div>
      </div>
    </>
  )

}

export default SiteInfo;