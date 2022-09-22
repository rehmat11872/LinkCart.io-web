import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Navbar } from './'

const Products = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box>
        <Navbar />
    </Box>

    <div class="bg-background-gray xl:col-start-2 w-full relative  xl:col-span-5 h-auto xl:mt-16 sm:ml-auto">
        <div class=" bg-white w-screen h-14 items-center flex px-4 border-b-[1px] lg:hidden fixed z-[100] ">
            <div class="relative w-6 h-6">
                <img src="/icons/logo.svg" alt="logo" class="w-auto"/>
                </div>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-8 h-8 text-lc-brand ml-2">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z">
                        </path>
                        </svg>
                        </div>
                        <div class=" secondcls pt-12 max-w-3.5xl lg:mx-auto w-full false">
                            <div class="flex-col lg:hidden bg-white ">
                                <div class=" items-center py-4 flex px-4 ">
                                    <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 text-lc-brand">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144">
                                            </path>
                                            </svg>
                                            <h1 class="text-title-black text-lg font-semibold align-middle justify-center flex m-auto">Products (0)</h1>
                                            </div>
                                            <div class="w-full h-[1px] bg-gray-200 mb-2 mx-auto">
                                                </div>
                                                </div>
                                                <div class="flex flex-col gap-3 mx-auto lg:w-full w-[90%]">
                                                    <div class="lg:flex justify-between hidden">
                                                        <h1 class="text-title-black text-4xl font-semibold">Products (0)
                                                        </h1>
                                                        <div class="w-48 radiusbtn">
                                                            <button value="Add product" icon="[object Object]" type="button" class="
      text-white bg-lc-brand 
      font-semibold
       w-full py-3 text-center text-base rounded-xl
        flex justify-center gap-4 transition ease-in-out delay-150 duration-300
        undefined
        undefined
        
        ">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT -right-2 w-5 h-5 top-[2px] relative flex ">
            <path d="M15 11a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4zm15 5a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0z">
                </path>
                </svg>
                <span class="">Add product
                </span>
                </button>
                <div>
                    </div>
                    </div>
                    </div>
                    <div>
                        </div>
                        <div class="text-lc-brand gap-2 flex ml-auto mt-4 underline hidden">
                            <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 text-lc-brand relative top-1">
                                <rect width="448" height="80" x="32" y="48" rx="32" ry="32"></rect>
                                <path d="M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z">
                                    </path>
                                    </svg>Delete selected
                                    </div>
                                    <div class="border-[1px] rounded-lg bg-white p-5 sm:px-12 w-full lg:min-h-[540px]  flex flex-col justify-center">
                                        <div class="lg:hidden">
                                            <button icon="[object Object]" value="Add product" type="button" class="
      text-white bg-lc-brand 
      font-semibold
       w-full py-3 text-center text-base rounded-xl
        flex justify-center gap-4 transition ease-in-out delay-150 duration-300
        undefined
        undefined
        
        ">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-5 h-5 top-[2px] relative flex">
            <path d="M15 11a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4zm15 5a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0z">
                </path>
                </svg>
                <span class="">Add product</span>
                </button>
                </div>
                <div class="flex flex-col justify-center items-center text-center gap-2 my-12 lg:my-auto">
                    <img src="./images/no-products.svg" alt="You have no products" class="w-3/4 lg:w-[196px]"/>
                <h2 class=" text-title-black text-xl font-medium">Add your first product!</h2>
                <p class=" text-second-gray lg:w-2/5">You haven't added any products yet, click the above button and get started.</p>
                </div>
                </div>
                </div>
                </div>
                <div class="Toastify"></div>
                </div>


    </Stack>
  )
}

export default Products