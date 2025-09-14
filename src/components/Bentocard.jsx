import React from 'react'

const Bentocard = ({src,description, title, isComingSoon}) => {
return (
<div className='relative size-full'>{title}


<video src= {src}
loop 
muted 
autoPlay 
className='absolute object-cover left-0 size-full object-center'/>
<div className="relative z-10 flex flex-col jusify-between p-5 text-blue-50">


<h1 className='bento-title special-font '>{title}</h1>

{description && (
<p className='mt-3 mx-w-64 text-xs '>
{description}

</p>
)}
</div>
</div>
)
}

export default Bentocard