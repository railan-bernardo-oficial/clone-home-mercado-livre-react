import { ChevronUp, CreditCard, PersonStanding } from "lucide-react";
import React from "react";
import SiteInfo from "../SiteInfo";

const Footer = () =>{

  return (
    <>
    <section className="bg-white">
      <SiteInfo />
      <div className="full-width flex justify-center border-b">
          <a href="" 
          className="border-l flex gap-1 items-end border-r border-t rounded text-sm px-3 py-2 relative top-1 bg-white">
            Mais informações
            <ChevronUp width={17} height={17} />
            </a>
      </div>
    </section>
      <footer className="full-width bg-white">
          <div className="xl:container mx-auto px-10">
            <div className="w-full px-4 py-3">
               <div className="w-full mb-3">
                  <ul className="flex gap-x-4">
                    <li>
                       <a href="" className="text-xs text-zinc-700">Trabalhe conosco</a>
                    </li>
                    <li>
                       <a href="" className="text-xs text-zinc-700">Termos e condições</a>
                    </li>
                    <li>
                       <a href="" className="text-xs text-zinc-700">Como cuidamos da sua privacidade</a>
                    </li>
                    <li>
                       <a href="" className="flex items-center gap-1 text-xs text-zinc-700">
                       <PersonStanding />
                        Acessibilidade
                        </a>
                    </li>
                    <li>
                       <a href="" className="text-xs text-zinc-700">Contato</a>
                    </li>
                    <li>
                       <a href="" className="text-xs text-zinc-700">Informações sobre seguros</a>
                    </li>
                  </ul>
               </div>
               <p className="text-xs text-zinc-900 opacity-50">Copyright © 1999-2023 Ebazar.com.br LTDA.</p>
               <p className="text-xs text-zinc-900 opacity-50">CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
            </div>
          </div>
      </footer>
    </>
  )

}

export default Footer;