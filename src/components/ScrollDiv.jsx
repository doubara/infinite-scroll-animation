import style from './ScrollDiv.module.css';
import ScrollImage from './ScrollImage'

import { useRef, useEffect, useState } from 'react';
import useScroll from './useScroll';


const ScrollDiv = (props) =>{
    //this state holds the value of the individual image width, whiich is used to compute the total width of the image containers andd the end point of the animation
    const [imageWidth, setImageWidth] = useState(0)
    //this is a reference to the scrollDiv component
    const scrollRef = useRef();
    const progress = useRef(null)

    let start, animation, current

    useEffect(()=>{
        const totalWidth = scrollRef.current.getBoundingClientRect().width
        function scrollAnimation(time){
            if (!start) start = time
            progress.current = Math.round((time - start) / props.fps)


            scrollRef.current.style.transform = `translate(-${progress.current}px)`;
            if (progress.current < totalWidth){
                animation = requestAnimationFrame(scrollAnimation);
            }
            else if (progress.current >= totalWidth){
                props.sendScrollingData({animationEnd: 1});
                
                
            }
            
        }
        console.log(progress.current)
        if (props.paws === true){
            cancelAnimationFrame(animation);
            
            // props.updateAnimationProgress(progress.current);
            
            // start = props.currentTime

            
        }
        else animation = requestAnimationFrame(scrollAnimation)
        
        return ()=>{
            cancelAnimationFrame(animation)
        }
        
        
    }, [imageWidth, props]);
    function gotImageRefWidth(width){
        setImageWidth(width);
    }
    
    return (
        <div ref={scrollRef} className={style.scrollDiv}>
            {props.images.map(cats=>{
                return <ScrollImage onGetImageRefWidth={gotImageRefWidth} key={cats+'key'} image={cats} 
                />
            })}
        </div>
    )
}


export default ScrollDiv;