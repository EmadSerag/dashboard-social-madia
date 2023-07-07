import React ,{ useState } from "react";

import "./App.css";
import {  TfiAngleUp,TfiTwitterAlt,TfiLinkedin, TfiAngleDown } from "react-icons/tfi";
import { AiFillFacebook,AiFillYoutube } from "react-icons/ai";
function App() {
  const [darkMode ,setDarkMode] =useState (false)
const handelDarkMode = e =>{
  setDarkMode(e.target.checked)
}


  return (
    <>
<div className={darkMode ? "dark" :""}>
  <div className="dark:bg-darkbg-dark">
      {/* header  */}
      <header className="w-full bg-bg pb-40 dark:bg-darkbg-dark">
        <div className="container mx-auto flex justify-between items-center h-32 ">
          <div>
            <h2 className="text-2xl dark:text-text-white"> Social Madia App</h2>
            <span className=" text-text-slate">Followers :120000</span>
          </div>
          <div>
            <label htmlFor="darkMode" className="mr-2 dark:text-text-white">
              Dark Mode
            </label>
            <input type="checkbox" name="darkMode" id="darkMode" onChange={handelDarkMode} />
          </div>
        </div>
      </header>
      {/* main cards */}

      <div className="container -mt-32  mx-auto text-text-slate grid lg:grid-cols-4 gap-2 md:grid-cols-2 ">
        {/* card  */}
        <div className="card  before:bg-facebook">
          <div className=" text-center  flex justify-center items-center pt-6">
            <span className="text-facebook pr-1">
              <AiFillFacebook size={22}/>
            </span>
            <span className="text-text dark:text-text-white">@emad_hamdi</span>
          </div>
          <div className=" text-center py-6">
            <h2 className="text-4xl font-bold text-text">2001</h2>
            <span>@emad_hamdi</span>
            <p className="uppercase tracking-widest font-medium">FoIIowers</p>
          </div>
          <div className=" text-center gap-1 flex justify-center items-center text-facebook">
            <span className=" cursor-pointer hover:pb-1 transition-all">
              <TfiAngleUp  />
            </span>
            <p className="uppercase tracking-widest font-medium ml-2">Today</p>
          </div>
        </div>
        <div className="card before:bg-youtube">
          <div className=" text-center  flex justify-center items-center pt-6">
            <span className="text-youtube pr-1" >
              <AiFillYoutube size={22}/>
            </span>
            <span className="text-text dark:text-text-white">@emad_hamdi</span>
          </div>
          <div className=" text-center py-6">
            <h2 className="text-4xl font-bold text-text">2001</h2>
            <span>@emad_hamdi</span>
            <p className="uppercase tracking-widest font-medium">FoIIowers</p>
          </div>
          <div className=" text-center gap-1 flex justify-center items-center text-facebook">
            <span className=" cursor-pointer hover:pb-1 transition-all">
              <TfiAngleUp  />
            </span>
            <p className="uppercase tracking-widest font-medium ml-2">Today</p>
          </div>
        </div>
        <div className="card before:bg-twitter">
          <div className=" text-center  flex justify-center items-center pt-6">
            <span className=" text-twitter pr-1">
              <TfiTwitterAlt size={22} />
            </span>
            <span className="text-text dark:text-text-white">@emad_hamdi</span>
          </div> 
          <div className=" text-center py-6">
            <h2 className="text-4xl font-bold text-text">2001</h2>
            <span>@emad_hamdi</span>
            <p className="uppercase tracking-widest font-medium">FoIIowers</p>
          </div>
          <div className=" text-center gap-1 flex justify-center items-center text-facebook">
            <span className=" cursor-pointer hover:pb-1 transition-all">
              <TfiAngleUp  />
            </span>
            <p className="uppercase tracking-widest font-medium ml-2">Today</p>
          </div>
        </div>
         <div className="card before:bg-linkedin">
          <div className=" text-center  flex justify-center items-center pt-6">
            <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            <span className="text-text dark:text-text-white">@emad_hamdi</span>
          </div>
          <div className=" text-center py-6">
            <h2 className="text-4xl font-bold text-text">2001</h2>
            <span>@emad_hamdi</span>
            <p className="uppercase tracking-widest font-medium">FoIIowers</p>
          </div>
          <div className=" text-center gap-1 flex justify-center items-center text-youtube">
            <span className=" cursor-pointer hover:pb-1 transition-all ">
              <TfiAngleDown  />
            </span>
            <p className="uppercase tracking-widest font-medium ml-2">Today</p>
          </div>
        </div>
      </div>
      {/* Overveiw  */}
      <div className="container pb-10">
        <h1 className="text-text font-bold mt-5 mb-5 text-2xl dark:text-text-white">Overveiw - Today</h1>
        <div className="text-text-slate grid lg:grid-cols-4 gap-2 md:grid-cols-2 ">
          <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h1 className="font-bold text-text-slate">Pages Views</h1>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold text-xl"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
        <div className="card p-5">
            <div className=" flex items-center justify-between">
              <h5 className="font-bold text-text-slate">Pages Views</h5>
              <span className="text-linkedin pr-1">
              <TfiLinkedin size={22} />
            </span>
            </div>
            <div className="num flex justify-between items-center">
              <h2 className=" text-text font-bold  text-xl dark:text-text-white"> 110</h2>
              <span className="text-main_green flex mt-5">
                <TfiAngleUp/>
                <p className="pl-3">300%</p>
              </span>
            </div>
        </div>
      </div>
      </div>
      </div> 
      </div>
    </>
  );
}

export default App;
