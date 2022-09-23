import React from 'react'
import logo1 from '../logoo.svg'
import eye from '../eye.svg'
import home from '../home.svg'
import customise from '../customise.svg'
import orders from '../orders.svg'
import payouts from '../Assets/payouts.svg'
import products from '../Assets/products.svg'
import Settings  from '../Assets/settings.svg'



function Navbar() {
    return (
        <div class="fixed lg:sticky top-0 w-8/12 lg:w-[320px] lg:col-start-1 lg:col-end-2 h-screen border-l-[#EFECF5] border-[1px] bg-white flex flex-col transition-all duration-100 animate z-[102] lg:z-[49] ">
            <div class="w-full sm:w-10/12 m-auto my-1 p-3 flex">
                <div class="flex gap-3 justify-between w-full items-center">
                    <div class="relative w-auto lg:h-12 flex items-center justify-center ">
                        <img src={logo1} alt="logo" class=" w-auto h-5" />
                    </div>
                    <a href="https://pars.linkcart.co/" target="_blank" rel="noreferrer">
                        <div class="bg-light-grey text-lc-brand rounded-full">
                            <span class="flex py-2 px-4 font-medium text-base items-center gap-2">
                                <img src={eye} alt="preview" class=" w-4 h-4" />View page</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-full h-[1px] bg-gray-200 mb-4 mx-auto">
            </div>
            <div class=" pl-2 w-full sm:w-11/12 m-auto mt-4 gap-4 flex flex-col">
                <button value="Home" icon="[object Object]" class="
                        bg-light-grey text-lc-brand
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={home} alt="home page" class=" w-6 h-6" /><a href='/'>Home</a></button>
                <button value="My page" icon="[object Object]" class="
                        false
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={customise} alt="layout" class=" w-6 h-6" /> <a href='/mypage'>My page</a> </button>
                <button value="Orders" icon="[object Object]" indicator="0" class="
                        false
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={orders} alt="orders" class=" w-6 h-6" /><a href='/orders'>Orders</a></button>
                <button value="Products" icon="[object Object]" class="
                        false
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={products} alt="products" class=" w-6 h-6" /><a href='/products'>Products</a></button>
                <button value="Payments" icon="[object Object]" class="
                        false
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={[payouts]} alt="payments" class=" w-6 h-6" />Payments</button>
                <button value="Settings" icon="[object Object]" class="
                        false
                        hover:bg-light-grey  w-11/12 sm:w-full py-3 px-4 text-left  font-medium text-base rounded-xl
                        flex justify-start gap-3 "><img src={Settings} alt="settings" class=" w-6 h-6" /><a href='/settings'>Settings</a></button>
            </div>
            <div class="mt-auto mb-4 block action-bar-container">
                <div class="w-full h-[1px] bg-gray-200 mb-4 mx-auto">
                </div>
                <button class="gap-3 flex items-center justify-center p-2 px-5 font-medium text-base">
                    <img src={orders} alt="logout" class=" w-auto h-6" />Logout</button>
            </div>
        </div>
    )
}

export default Navbar
