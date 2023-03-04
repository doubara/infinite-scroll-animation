import style from './ScrollDiv.module.css';
import ScrollImage from './ScrollImage'

import { useRef, useEffect, useState } from 'react';
import useScroll from './useScroll';


const ScrollDiv = (props) =>{
    //this state holds the value of the individual image width, whiich is used to compute the total width of the image containers andd the end point of the animation
    const [imageWidth, setImageWidth] = useState(0)
    //this is a reference to the scrollDiv component
    const scrollRef = useRef();
    
    let start, animation

    useEffect(()=>{
        const totalWidth = scrollRef.current.getBoundingClientRect().width

        function scrollAnimation(time){
            if (!start) start = time
            let progress = Math.round((time - start) / props.fps)
            
            scrollRef.current.style.transform = `translate(-${progress}px)`;
    
            if (progress < totalWidth){
                animation = requestAnimationFrame(scrollAnimation);
            }
            else if (progress >= totalWidth){
                props.sendScrollingData({animationEnd: 1});
                
            }
        }
        
        
        animation = requestAnimationFrame(scrollAnimation)
        if (props.paws === true){
            cancelAnimationFrame(animation);
            console.log('Animation paused');
        }
    }, [imageWidth, props.paws]);
    function gotImageRefWidth(width){
        setImageWidth(width);
    }
    
    return (
        <div ref={scrollRef} className={style.scrollDiv}>
            {props.images.map(cats=>{
                return <ScrollImage onGetImageRefWidth={gotImageRefWidth} key={cats+'key'} image={cats} />
            })}
        </div>
    )
}


export default ScrollDiv;