import React from "react";
import { Bell, ChevronDown, MapPin, Search, ShoppingCart } from "lucide-react";


const Header = () =>{

  return (
    <>
     <header className="h-[6.25rem] bg-[#fff159]">
         <div className="xl:container mx-auto px-10">
             <div className="grid grid-cols-custom grid-rows-custom gap-x-6 gap-y-3 px-3 pt-2 pb-3">
                <div className="full-width">
                    <a href="">
                      <img src="img/logo-mercado-livre.png" alt="Mercado Livre" />
                    </a>
                </div>
                <div className="full-width bg-white rounded-sm">
                   <form className="full-width flex h-10 relative" autoComplete="off">
                      <input type="text" autoComplete="off" className="w-full shadow-custom px-3 rounded-sm ring-0 outline-none focus:ring-1 text-base placeholder-zinc-300 focus:ring-inset focus:ring-indigo-400" name="search" placeholder="Buscar produtos, marcas e muito mais..." />
                      <button type="submit" className="absolute border-l px-4 text-zinc-400 right-3 top-3">
                      <Search width={16} height={16} />
                      </button>
                   </form>
                </div>
                <div className="full-widt">
                  <a href="">
                    <img src="img/logo-meli.webp" alt="meli" />
                  </a>
                </div>
                <div className="full-width">
                  <a href="" className="flex items-center">
                     <MapPin className="pb-2" width={30} height={30} />
                    <div className="flex flex-col mb-2">
                      <span className="text-xs text-zinc-900 opacity-50">Enviar para railan</span>
                      <span className="text-sm text-zinc-900">Rua 37 1</span>
                    </div>
                  </a>
                </div>
                <div className="full-width flex items-end">
                 <ul className="flex gap-x-4 h-full items-end ">
                  <li>
                    <a href="" className="flex items-end text-sm text-zinc-900 text-opacity-50">
                      Categorias
                      <ChevronDown className="opacity-25" width={16} height={16} />
                      </a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Ofertas do dia</a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Histórico</a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Super mercado</a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Moda</a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Vender</a>
                  </li>
                  <li>
                    <a href="" className="text-sm text-zinc-900 text-opacity-50">Contato</a>
                  </li>
                 </ul>
                </div>
                <div className="full-width">
                  <div className="flex gap-6 h-full items-end justify-center">
                    <a href="" className="flex items-end text-sm text-zinc-900">
                       <img className="rounded-full mr-1" width={20} height={20} src="img/avatar.webp" alt="avatar" />
                       Railan
                       <ChevronDown className="opacity-25" width={16} height={16} />
                    </a>
                    <a href="" className="flex text-sm text-zinc-900">Compras</a>
                    <a href="" className="flex text-sm text-zinc-900">Favoritos</a>
                    <a href="">
                      <Bell width={16} height={16} />
                    </a>
                    <a href="">
                    <ShoppingCart width={16} height={16} />
                    </a>
                  </div>
                </div>
             </div>
         </div>
     </header>
    </>
  )

}

export default Header;