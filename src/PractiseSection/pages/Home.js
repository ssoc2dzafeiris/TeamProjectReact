import React from 'react';


export default function Home(){

    return(
        <div class="container m-auto p-8 text-grey-darkest">

   <h1 class="mb-8">Tailwind CSS flex grid</h1>

   <h2 class="mb-4">Column Spacing</h2>
   <p class="mb-4">Example of column spacing from the <a href="https://tailwindcss.com/docs/examples/grids/#column-spacing" class="text-indigo">documentation.</a></p>

   <div class="flex -mx-2 mb-8">
      <div class="w-1/3 px-2">
         <div class="bg-grey-light h-12"></div>
      </div>
      <div class="w-1/3 px-2">
         <div class="bg-grey h-12"></div>
      </div>
      <div class="w-1/3 px-2">
         <div class="bg-grey-light h-12"></div>
      </div>
   </div>

   <h2 class="mb-4">Responsive 3 col flex grid</h2>

   <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
         <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
         <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
      </div>
      <div class="w-full lg:w-1/2 px-2">
         <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half</p>
         </div>
      </div>
   </div>

   <h2 class="mb-4">Using borders for gutters</h2>

   <div class="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
      <div class="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey"></div>
      <div class="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey"></div>
      <div class="h-16 border-8 w-full lg:w-1/2 bg-grey"></div>
   </div>

</div>
        
    )
}