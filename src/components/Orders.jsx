import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Navbar } from './'


const Orders = () => {
  return (        
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box>
        <Navbar />
    </Box>
    <div class="bg-background-gray xl:col-start-2 w-full relative  xl:col-span-5 h-auto xl:mt-16 sm:ml-auto">
        <div class=" bg-white w-screen h-14 items-center flex px-4 border-b-[1px] lg:hidden fixed z-[100] ">
            <div class="relative w-6 h-6">
                {/* <img src="/icons/logo.svg" alt="logo" class="w-auto"> */}

                </div>
                {/* <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-8 h-8 text-lc-brand ml-2">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg> */}
                    </div>
                    <div class="pt-12 max-w-[953px] lg:mx-auto w-full">
                        <div class="flex-col lg:hidden bg-white ">
                            <div class=" items-center py-4 flex px-4 ">
                                {/* <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 text-lc-brand relative -top-[2px]"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"></path>
                                </svg> */}
                                <h1 class="text-title-black text-base font-medium align-middle justify-center flex m-auto">
                                    Orders
                                    </h1>
                                    </div>
                                    <div class="w-full h-[1px] bg-gray-200 mb-2 mx-auto">
                                        </div>
                                        </div>
                                        <div class="flex flex-col gap-8 w-[90%] mx-auto mt-5">
                                            <div class="lg:flex justify-between hidden">
                                                <div class="flex items-center">
                                                    <div class="bg-white rounded-lg p-1.5 border border-[#E9E5F0] mr-4">
                                                        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-lc-brand"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.2625 10L13.375 5.8875C13.6125 5.6625 13.75 5.35 13.75 5C13.75 4.3125 13.1875 3.75 12.5 3.75C12.15 3.75 11.8375 3.8875 11.6125 4.1125L6.6125 9.1125C6.3875 9.3375 6.25 9.65 6.25 10C6.25 10.35 6.3875 10.6625 6.6125 10.8875L11.6125 15.8875C11.8375 16.1125 12.15 16.25 12.5 16.25C13.1875 16.25 13.75 15.6875 13.75 15C13.75 14.65 13.6125 14.3375 13.3875 14.1125L9.2625 10Z" fill="#5D3ED3"></path>
                                                        </svg> */}
                                                        </div>
                                                        <h1 class="text-title-black text-3xl font-medium font-Outfit">Orders</h1>
                                                        </div>
                                                        </div>
                                                        <div class="w-full   pb-5">
                                                            <div class="w-full">
                                                                <div class="flex w-full rounded-t-xl border-gray-200 justify-between md:justify-start md:gap-4 border-[1px] bg-white">
                                                                    <div class="false cursor-pointer w-full md:w-auto p-4 text-center font-medium text-base text-second-gray font-Outfit">New </div>
                                                                    <div class=" border-lc-brand border-b-[2px] w-full text-center text-lc-brand cursor-pointer p-4 w-full md:w-auto text-center font-medium text-base text-second-gray font-Outfit">Completed </div>
                                                                    </div>
                                                                    </div>
                                                                    <div class="pb-4 pt-4 xl:pt-0">
                                                                        <table class="table-auto w-full border-[1px] rounded-lg bg-white">
                                                                            <tbody class="">
                                                                                </tbody>
                                                                                </table>
                                                                                <div class="flex flex-col justify-center items-center p-8 sm:p-16 bg-white">
                                                                                    {/* <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"> */}
                                                                                        {/* <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"> */}
                                                                                             {/* <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27196%27%20height=%27196%27/%3e" style=display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"/> */}
                                                                                             {/* </span> */}
                                                                                            {/* <img srcset="/images/E-commerce.svg 1x, /images/E-commerce.svg 2x" src="/images/E-commerce.svg" decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"/> */}
                                                                                                {/* </span>  */}
                                                                                                <h3 class="font-Outfit font-medium text-xl leading-6 text-center mt-3">No new orders, yet!</h3>
                                                                                                <p class="w-[272px] text-second-gray font-Outfit font-normal text-base leading-6 text-center mt-2">When you get an order you’ll see it with all the relevant information here.</p>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                <div class="Toastify">
                                                                                                    </div>
                                                                                                    </div>

    </Stack>                                                                                 
  )
}

export default Orders