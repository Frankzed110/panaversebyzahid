"use client"
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
// import "../../app/home.css" after tailwind we are not using this


/////////////////////////before tailwind///////////
// export default function Home({ params }: { params: { feedback: string } }) {

//     return (
//         <>
//             <Box backgroundColor='gray' padding='20px'>
//                 <h1 className='header mt'> Feedback page</h1>
//                 <h1>Taught by Hamza</h1>
//                 <div>I want this page to be: {params.feedback}</div>
//             </Box>
//             <Box>
//                 <ul>
//                     <li className='mt'>Current Students</li>
//                     <li className='mt'>New Students</li>
//                 </ul>
//             </Box>
//         </>
//     )
// };

///////////////////////////before tailwind css//////////////

///////////////////////////After installing Tailwind CSS///////
export default function Home({ params }: { params: { feedback: string } }) {

    return (
        <>
            <Box backgroundColor='gray' padding='20px'>
                <h1 className= " lg:text-green-900 sm:text-cyan-100 xl:to-blue-600 text-2xl font-bold "> Feedback page</h1>
                <h1 className= "italic" >Taught by Hamza</h1>
                <div >I want this page to be: {params.feedback}</div>
            </Box>
            <Box>

                <ul>
                    <Button className="text-orange-500">Current Student</Button>
                    <br/>
                    <Button className="text-slate-400">New Student</Button>
                </ul>
            </Box>
            <br/>
            <Box>
                <h1 className='text-3xl font-bold underline px-4'>
                    Hello from Adil!
                </h1>
            </Box>
            <div className="flex justify-start mt-2 bg-gray-300" >
                <div className="mx-4 order-last mt-4">
                    <Image src="/next.svg" alt='alt image' width={100} height={100}/>
                </div>
                <div className=" mx-4 self-center">
                    <h1 className=" text-2xl font-bold text-blue-700"> Welcome to Tailwind</h1>
                    <h2 className="font-semibold text-blue-300"> This supersedes CSS</h2>
                    <button className='my-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900'> Learn More </button>
                </div>
            </div>
        </>
    )
};



//////////////////////////////////////////////////////////////////////////
// Notes:
        //*****this is not part of website but made to practice dynamic routes, typing anything after main url will return this. This was taught by hira and Adil
        //home.css was taught by hamza syed and after making home.css in app, it was imported to this page. above path i have configured myself.
        //with className we differentiate between two h1
        //nextjs is react's framework, ease work for react. styling has framework like chakra ui and tailwind css. chakra ui has built in components.
        //tailwindcss gives classes and you modify it accordingly.chakra ui has challenge in custom design because it is built in. tailwind has this flexibility. chakra ui has no server components. 
        // JSX - html/css/JS = SSR or CSR so next JS do it in SSR. browser reads only html it doesn't understant JSX which we use to write. 
        // initially it was CSR = files was downloaded and html page made.
        // SSR= built time html page and now html and JS linked
        // server side components will allow the html structure to appear instantly and rest will load accordingly. SSR allows for better SEO. 
        // chakraui uses browser tool and thats why we can render it on browser only and not on server while tailwind is helpful
        //  dynamic side rendering = pages rendered already. 
        // SSG =static side generation on built time render pages and if i want to change something i will rebuilt
        // JSX after built time will be changed to html
        //in ssr on request and in ssg on built time
        //dynamic routing = if not told its ssr then it will be static side
        // nextjs use headless cms vs cms: headless will keep frontend same and styling cannot be changed only content can be altered.
        // we make classes in home.css and use it here as classname
        
        // ///////////////////////////////////////////////////////////

        // installing tailwind css requires it to run npm in terminal; details mentioned on panaverse github
        //  command is (npm install -D tailwindcss postcss autoprefixer)
        //tailwind css, post css(tailwind only carry those styling i.e. used in project only), autoprefixer(css for all browsers)
        // next run this command: npx tailwindcss init -p
        // add code into tailwind.config.js: /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
//       "./pages/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
  
//       // Or if using `src` directory:
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

// now make globals.css file if not there, if already there add into it:@tailwind base; @tailwind components; @tailwind utilities; 
// import this into layout as well "./globals.css"
// download tailwind css extension 


///hamza also taught how make component without using charka UI for Button. he first made Button component and made a const Button =({text}) =>{return(<><button className="">{text}<Button/></>)} and then export default Button and imported it in file where you want to print it. also props were used lik this to print: <Button text={"click me"}/> and for import simple i.e. import Button from "./Button". In contrast if we use children in place of text then we can use anything between <button><button/>