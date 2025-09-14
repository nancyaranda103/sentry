
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import { useRef } from 'react'




gsap.registerPlugin(ScrollTrigger)

 
const AnimatedTittle = ({title, containerClass}) => {

const containerRef = useRef();


useEffect(() => {
  const Ctx = gsap.context(() => {
const titleAnimation = gsap.timeline(

{
scrollTrigger: {
trigger: containerRef.current,
start: '100 bottom',
end: "center bottom",
tooggleActions: "play none none reverse"

}
});



titleAnimation.to(".animated-word",
{opacity:1, 
transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
ease: 'power2inOut',
stagger: 0.02,
})




  }, containerRef)





return () => Ctx.revert();
}, [])



  return (


<div className={`animated-title ${containerClass}`}
ref={containerRef} >
{title.split('<br/>').map((line, index) => (
<div key={index} className='flex-center max-w-full flex-wrap gap-2 md:gap-3 px-10'>

{line.split(` `).map((word, index) => (
<span key={index} className='animated-word' dangerouslySetInnerHTML={{__html: word}}/>


))}

</div>
))}
</div>



  )
}

export default AnimatedTittle