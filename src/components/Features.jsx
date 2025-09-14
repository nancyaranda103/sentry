import React, { useRef, useState } from 'react'
import Bentocard from './Bentocard'
import { TiLocationArrow } from 'react-icons/ti'


const BentoTilt =({children, className = ''}) => {
const [tranformStyle, settranformStyle] = useState("")
const itemRef = useRef();
const handleMouseMove = (e) => {


    if(!itemRef.current)return;
const {left, top, width, height} = itemRef.current.getBoundingClientRect();

const relativeX = (e.clientX - left) / width;
const relativeY =  (e.clientY - top) / height;
const tiltX = (relativeY - 0.5 )* 10;gir 
const tiltY = (relativeX - 0.5 ) *- 10;

const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)` 



settranformStyle(newTransform)
}


const handleMouseLeave = (e) =>{

    settranformStyle("")
}

// here i put it inside children 

return(

<div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave = {handleMouseLeave} className= {className} 

style={{transform: tranformStyle}}>
{children}

</div>

)

}




const Features = () => {
return (
<section className='bg-black pb-52 '>

<div className='container mx-auto px-3 md:px-10 '>
<div className="px-5 py-32 ">

<p className='font-circular-web text-blue-50 text-lg'>

Into the Metagame Layer 
</p>

<p className='max-w-md font-circular-web text-lg text-blue-50'>
immerse yourself in a rich and ever-expanding universe where a vibrant array of products converage into an
interconnected overlay experience  on your world.

</p>
</div>


<BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md *
md:h-[65vh]">


<Bentocard src="videos/feature-1.mp4" 
title ={<>radi<b>n</b>t</>}
description = "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."

/>
</BentoTilt>



<div className="grid grid-cols-2 grid-row-3 h-[135vh]
gap-7 ">
<BentoTilt className='bento-tilt_1  row-span-1 md:col-span-1 
md:row-span-2 '> 
<Bentocard src= "videos/feature-2.mp4"
title ={<>zig<b>m</b>a</>}
description= "An anime and gaming-inspired NFT collection - the IP primed for expansion."
/>

</BentoTilt>

<BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>

<Bentocard 

src= "videos/feature-3.mp4"
title ={<>nex<b>e</b>us</>}
description= "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
/>



</BentoTilt>
<BentoTilt className='bento-tilt_1 me-15 md:col-span-1 md:me-0'>

<Bentocard 

src= "videos/feature-3.mp4"
title ={<>az<b>u</b>l</>}
description= "A cross-world AI Agent - elevating your gameplay to be more fun and productive."
/>
</BentoTilt>
<div className="bento-tilt_2">


<div className="flex size-full flex-col justify-between p-5 bg-violet-300">


<h1 className='special-font bento-title max-w-54 text-black'>

M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>


<TiLocationArrow className='m-5 scale-[5] self-end'/>
</div>
</div>
<BentoTilt className="bento-tilt_2">
<video src='videos/feature-5.mp4'
loop
muted 
autoPlay
className='size-full object-cover object-center'/>

</BentoTilt>


</div>
</div>


</section>
)
}

export default Features