import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)



const Hero = () => {

const [currentIndex, setcurrentIndex] = useState(1)
const [hasClicked, sethasClicked] = useState(false)
const [isloading, setisloading] = useState(true)
const [loadedVideos, setloadedVideos] = useState(0)


const totalVideos = 4


const nextVideoRef = useRef()

const handleMiniVdClick = () =>{
sethasClicked(true)
setcurrentIndex (upcomingVideoIndex)

} 
const handleVideoLoad = () => {
setloadedVideos((prev) => prev + 1);
};

// modulo operations 
const upcomingVideoIndex =(currentIndex % totalVideos)+1;


const getVideoSrc = (index) => `videos/hero-${index}.mp4`


useEffect(() => {
   if(loadedVideos === totalVideos-1){

setisloading(false)
   }


}, [loadedVideos])







useGSAP(() => {
  if (hasClicked) {
gsap.set('#next-video', {visibility: 'visible'})

gsap.to('#next-video', {
transformOrigin: 'center center',
scale: 1,
width: '100%',
height:  "100%",
duration: 1,
ease: 'power1.inOut ',
onStart: () => nextVideoRef.current.play(),
})


gsap.from('#current-video',{
transformOrigin:'center center',
scale: 0,
duration: 1.5,
ease: 'power1.1inOut'

} )
  }
}, { dependencies: [currentIndex], revertOnUpdate: true });







useGSAP(() => {  
gsap.set('#video-frame',{
clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
borderRadius: '0 0 40% 10%'
})

gsap.from('#video-frame',{
clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
borderRadius: '0 0 0 0',
ease: 'power1.inOut',
scrollTrigger: {   
trigger:'#video-frame',
start: "center center",
end: "bottom center",
scrub: true,
}

})

})
return (
<div className='relative h-dvh w-screen overflow-x-hidden'>

{isloading && (
<div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
<div className="three-body"> 
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>


</div>
</div>

)}
<div id= 'video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75  '>
<div>
<div className='mask-clip-path absolute-center absolute z-50 size-54 cursor-pointer overflow-hidden
rounded-lg'>
<div onClick={handleMiniVdClick} className='orgin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100  hover:opacity-100 '>
<video  ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)}
loop 
muted 
id='next-video'
className='size-64 orgin-center scale-150 object-cover object-center'
onLoadedData = {handleVideoLoad} />


</div>
</div>

<video ref={nextVideoRef}
src={getVideoSrc(currentIndex)}
 loop
 muted 
 onLoadedData={handleVideoLoad}
 className='absolute-center absolute invisible z-20 size-64 object-cover object-center'  />

<video src={getVideoSrc (currentIndex === totalVideos - 1 ? 1 : currentIndex)}
 loop
 autoPlay
 muted 
 id='current-video'
 onLoadedData={handleVideoLoad}
 className='absolute left-0 top-0 size-full object-cover object-center'  />
</div>
<h1 className='special-font absolute bottom-5 text-blue-75 z-40 hero-heading'>G<b>a</b>ming </h1>
<div className="absolute left-0 top-0 z-40 size-full">
<div className='mt-24 px-4 sm:px-10 ' >
<h1 className='special-font hero-heading text-blue-100 '>redfi<b>n</b>e</h1>
<p className='mb-5 max-w-64 font-robert-regular text-blue-100'>

    Enter the Meta game layer <br />Unleash the play Economy
</p>
<Button id= "watch-trailer"
title ="watch" 
leftIcon={<TiLocationArrow/>}
containerClass = 'bg-yellow-300 flex-center gap-1'
/>
</div>

</div>

</div>

<h1 className='special-font absolute bottom-5 hero-heading text-black'>G<b>a</b>ming </h1>



</div>
)
}

export default Hero