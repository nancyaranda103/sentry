import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';


const navItems = [ 'Nexus', "Vault", 
"Prologue", "About", 'Contact'

]
const Navbar = () => {
const [isAudioPlaying, setisAudioPlaying] = useState(false)
const [isIndicatorActive, setisIndicatorActive] = useState(false)
const [lastScrollY, setlastScrollY] = useState(0)
const [isNavVisible, setisNavVisible] = useState(true)
const audioElementRef = useRef(null); 



const {y: currentScrollY} = useWindowScroll();


useEffect(() => {
if(currentScrollY ===0 ){

   navContainerRef.current.classList.remove('floating-nav')
}else if (currentScrollY > lastScrollY ){

setisNavVisible(false)

}else if (currentScrollY < lastScrollY){
    setisNavVisible(true)
    navContainerRef.current.classList.add('floating-nav')
}

setlastScrollY(currentScrollY)


}, [currentScrollY])


useEffect(() => {

gsap.to(navContainerRef.current, {
y: isNavVisible ? 0 :-100,
opacity:isNavVisible ? 1: 0,
duration: 0.2,


})



}, [isNavVisible])





const toogleAudioIndicator = () => {
setisAudioPlaying(prev => !prev)
setisIndicatorActive(prev => !prev)
}


useEffect(() => {
if (isAudioPlaying) {
    audioElementRef.current.play();
}else{
   audioElementRef.current.pause() 
}




}, [isAudioPlaying])



const navContainerRef = useRef(null)
return (



<div ref={navContainerRef} className=' fixed inset-x-0
top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
<header className='absolute top-1/2 w-full -translate-y-1/2 '>
<nav className='flex items-center justify-between size-full
p-4'>

<div className='flex items-center gap-7 '>
<img src="/img/logo.png" alt="logo" 
className='w-10'/>
<Button id ="product-button"
title = "Products" 
rightIcon = {<TiLocationArrow/>}
containerClass= "bg-blue-50 md:flex hidden items-center justify-center gap-1"

/>
</div>





<div className="flex h-full items-center  ">

<div className="hidden md:block"> 
{navItems.map(item => (
<a className='nav-hover-btn text-white'>{item}</a>
))}


</div>

<button onClick={toogleAudioIndicator} className='ml-10 flex items-center space-x-0.5 '>
<audio  src="/audio/loop.mp3" loop ref={audioElementRef} className='hidden'></audio>
{[1,2,3,4].map((bar) => (

<div key={bar}className= {`indicator-line ${isIndicatorActive ? "active" : ""} `}

style={{animationDelay: `${bar*0.4}s`}}>


</div>

))}




</button>

</div>



</nav>
</header>
</div>
)
}

export default Navbar