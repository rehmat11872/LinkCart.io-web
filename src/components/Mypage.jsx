import React from 'react'
    import { Navbar } from './'
import { Box, Stack, Typography } from "@mui/material";
import logo from '../logo.svg'

const Mypage = () => {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box>
                <Navbar />
            </Box>

            <div className='class="bg-background-gray xl:col-start-2 w-full relative  xl:col-span-5 h-auto  sm:ml-auto"'>
                <div className='class=" bg-white w-screen h-14 items-center flex px-4 border-b-[1px] lg:hidden fixed z-[100] "'>
                    <div className='class="relative w-6 h-6"'>
                        <img src={logo} alt="logo" class="w-auto" ></img>

                    </div>

                </div>

                <div class="pt-12 lg:mt-0 lg:pt-0">
                    <div class="min-h-screen flex bg-background-gray w-full lg:grid lg:grid-cols-5">
                        <div class="bg-background-gray flex flex-col w-full lg:w-1/2 xl:w-full relative h-auto mx-auto col-start-1 col-end-5" >
                            <div class=" border-[#EFECF5] border-[1px] lg:h-screen min-h-[90vh] w-full px-[5%] lg:px-0 lg:w-[320px] sm:fixed flex flex-col transition-all duration-100 animate z-[98] lg:right-0  bg-white" >
                                <div class="flex w-full ">
                                    <div class="flex py-4 gap-2 px-8 w-1/2 justify-center text-lc-brand border-b-2 border-lc-brand cursor-pointer">
                                        <span class="font-medium">Layout</span>
                                    </div>
                                    <div class="flex py-4 gap-2 w-1/2 justify-center border-b cursor-pointer" >
                                        <span class="font-medium text-[#8C8899]">Design</span>
                                    </div>


                                </div>
                                <div class="bg-white rounded-md w-full sm:w-11/12 m-auto mt-4 flex flex-col h-full lg:overflow-y-auto">
                                    <div class="border-lc-brand border-[1px] rounded-lg p-3 items-center flex justify-center gap-1 cursor-pointer">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-5 h-5 relative flex text-lc-brand">
                                            <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z">
                                                </path>
                                                </svg>
                                                <span class="text-lc-brand font-medium text-base ">Page info and layout</span>
                                                </div>
                                                <h3 class=" text-[#8C8899] font-semibold text-xs uppercase tracking-wider my-4">Socials</h3>
                                                <div class="flex gap-2 flex-wrap w-full">
                                                    <div class="border-[1px] border-[#EFECF5] rounded-full cursor-pointer">
                                                        <div class="flex items-center justify-center p-2 gap-2 rounded ">
                                                            <div class="flex w-5 h-5">
                                                                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT relative flex text-lc-brand">
                                                                    <g data-name="Layer 2">
                                                                        <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" data-name="plus">
                                                                            </path>
                                                                            </g>
                                                                            </svg>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            <h3 class=" text-[#8C8899] font-semibold text-xs uppercase tracking-wider my-4">Sections
                                                                            </h3>
                                                                            <div class="border-[2px] border-dashed rounded-lg justify-center flex flex-col items-center gap-3 p-8">
                                                                                <span class="text-4xl">🏗️
                                                                                </span>
                                                                                <span class="text-[#4C4562] text-base text-center mx-auto">Add your first section by clicking the button below.
                                                                                </span>
                                                                                <div class="w-9/12">
                                                                                    <div class="hidden lg:flex">
                                                                                        <button hollow="true" value="Add section" icon="[object Object]" type="button" class="bg-white border-lc-brand border-solid border-[1px] text-lc-brand  font-semibold w-full py-3 text-center text-base rounded-xl
        flex justify-center gap-4 transition ease-in-out delay-150 duration-300
        undefined
        undefined
        
        ">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-5 h-5 top-[2px] relative flex"><path d="M15 11a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4zm15 5a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0z"></path></svg><span class="">Add section</span></button></div><div class=" lg:hidden flex">
                <button hollow="true" value="Add section" icon="[object Object]" type="button" class="
       bg-white border-lc-brand border-solid border-[1px] text-lc-brand
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
                    <span class="">Add section</span>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                            </div>
                            <div class="w-full relative justify-center flex">
                                <div class="mt-4">
                                <div class="w-full flex items-center justify-between px-4">
                                    <div class="bg-white flex space-x-4 items-center rounded-3xl p-1 pb-2 px-4 border-[1px] border-gray-200">
                                        <div class="cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-5 h-5 relative flex text-lc-brand text-lc-brand"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
                                            </svg>
                                            </div>
                                            <div class="cursor-pointer">
                                                <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-5 h-5 relative flex text-lc-brand text-lc-dark-grey ">
                                                    <rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></rect>
                                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"></path></svg></div></div></div></div></div>
                            <div class="w-full bg-background-gray md:w-[90%] 2xl:w-[100%] mx-auto h-full relative lg:mb-0 md:pt-4"><div class="md:rounded-xl w-full md:w-[86%] h-full mx-auto "><iframe id="linkcart-store-iframe-desktop" width="100%" src="https://usmanbrand.linkcart.co/?preview=true&amp;primary=%231a1a1a&amp;tint=%23e8e8e8&amp;stroke=%23a3a3a3&amp;useBgTint=false&amp;buttonShape=curved&amp;buttonFill=hollow&amp;font=Roboto-Regular&amp;section_order=null" class="md:rounded-2xl shadow-md h-full md:h-[98%]">
                                </iframe>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>



            </div>
        </Stack>

    )
}

export default Mypage