import React from 'react'
import { Navbar } from './'
import { Box, Stack, Typography } from "@mui/material";
import { screen } from '@testing-library/react';

function Home() {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box>
                <Navbar />
            </Box>

            <Box p={2} sx={{ overflowY: "auto",  flex: 2 }}>
                <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "black" }}>
                    <div className='class="d-flex align-content-center flex-wrap"' style={{marginTop: '100px'}}>
                   
                    <div class="p-2">
                      <div className='border-[1px] rounded-lg bg-white py-8 max-w-4xl m-auto margin: auto; gap-2 lg:gap-4 p-4 lg:p-8 flex flex-col shadow-sm' >
                      <h1 class="text-title-black text-xl lg:text-2xl font-medium align-middle flex relative ">👋 Welcome to linkcart.</h1>
                      <p class=" text-second-gray" >We are excited to you have here. Linkcart is a breeze to set up, follow the steps below to begin</p>
                      <p class=" text-second-gray" >For any support requests. Please email <a href="mailto:contact@linkcart.co" class="text-lc-brand underline" >contact@linkcart.com</a></p>
                       <div className='flex flex-col lg:flex-row w-full lg:gap-8 gap-4 align-middle lg:items-center text-lc-brand border-lc-brand border-[1px]  bg-[#4114C71A] rounded-lg p-5 my-1 justify-between'>
                           <div className='flex gap-4 align-middle items-center'>
                             <span>
                               <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" 
                               fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                               class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 relative flex text-lc-brand -top-[1px] ">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" >
                                  </path>
                               </svg>
                              </span>
                              <span class="font-medium text-lc-brand" >Create your layout</span>
                           </div>

                           <div class="w-full lg:w-32">
                              <button value="Go to layout" type="button" class="text-blue bg-lc-brand font-semibold
                                 w-full py-3 text-center text-base rounded-xl
                                 flex justify-center gap-4 transition ease-in-out delay-150 duration-300">
                                 <span className='text-second-black'>Go to layout</span>
                                 </button>
                            </div>


                        </div>


                        <div className='flex flex-col lg:flex-row w-full lg:gap-8 gap-4 align-middle lg:items-center text-lc-brand border-lc-brand border-[1px]  bg-[#4114C71A] rounded-lg p-5 my-1 justify-between'>
                           <div className='flex gap-4 align-middle items-center'>
                             <span>
                               <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" 
                               fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                               class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 relative flex text-lc-brand -top-[1px] ">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" >
                                  </path>
                               </svg>
                              </span>
                              <span class="font-medium text-lc-brand" >Create your layout</span>
                           </div>

                           <div class="w-full lg:w-32">
                              <button value="Go to layout" type="button" class="text-blue bg-lc-brand font-semibold
                                 w-full py-3 text-center text-base rounded-xl
                                 flex justify-center gap-4 transition ease-in-out delay-150 duration-300">
                                 <span className='text-second-black'>Go to layout</span>
                                 </button>
                            </div>


                        </div>


                        <div className='flex flex-col lg:flex-row w-full lg:gap-8 gap-4 align-middle lg:items-center text-lc-brand border-lc-brand border-[1px]  bg-[#4114C71A] rounded-lg p-5 my-1 justify-between'>
                           <div className='flex gap-4 align-middle items-center'>
                           <span >
                               <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" 
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                                   class="StyledIconBase-ea9ulj-0 VtuNT w-4 h-4 relative flex text-lc-brand -top-[1px] " >
                                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                                   </path>
                                </svg>
                            </span>
                              <span class=" font-medium line-through	text-[#A5A3AE]" >Added your first product</span>
                           </div>

                        </div>





                      </div>
                      
                    </div>
                    

                    <div class="p-2">
                      <div className='border-[1px] rounded-lg bg-white py-8 max-w-4xl m-auto margin: auto; gap-2 lg:gap-4 p-4 lg:p-8 flex flex-col shadow-sm'>
                          <span class="text-2xl font-medium" >🎉 0% transaction fees</span>
                          <p class="w-4/5 text-sm" >As an early Linkcart user, you wont pay any 
                          transaction fees on top of the payments standard Stripe processing fee.</p>
                      </div>
                    </div>



                    <div class="p-2">
                      <div className='border-[1px] rounded-lg bg-white py-8 max-w-4xl m-auto margin: auto; gap-2 lg:gap-4 p-4 lg:p-8 flex flex-col shadow-sm'>
                          <div class="flex -space-x-1 relative z-0 overflow-hidden" >
                             <img class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                             <img class="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                             <img class="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
                             <img class="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                          </div>
                          <span class="text-2xl font-medium">Join the community</span>
                          <p class="w-4/5 text-sm" >Connect with other Linkcart users and the team behind the platform.</p>
                          <a href="https://discord.gg/FmDhYX4V" target="__blank">
                             <button icon="[object Object]" value="Discord" type="button" 
                             class="text-black bg-lc-brand font-semibold
                                     w-full py-3 text-center text-base rounded-xl
                                     flex justify-center gap-4 transition ease-in-out delay-150 duration-300">
                                     <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 VtuNT w-6 h-6 relative flex text-white">
                                        <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z">
                                        </path>
                                        <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" >
                                        </path>
                                      </svg>
                                        <span className='text-secondary-black'>Discord</span>
                                </button>
                            </a>
                      </div>
                      
                    </div>
                  </div>
                  
                   

                </Typography>
            </Box>
        </Stack>
    )
}

export default Home
