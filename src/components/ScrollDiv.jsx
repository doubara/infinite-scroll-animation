import style from './ScrollDiv.module.css';
import ScrollImage from './ScrollImage'

import { useRef, useEffect, useState, useContext } from 'react';
import useScroll from './useScroll';
import UpdateProgressContext from './UpdateProgressContext';


const ScrollDiv = (props) =>{
    const {progress:animationProgress, setProgress} = useContext(UpdateProgressContext);
    //this state holds the value of the individual image width, whiich is used to compute the total width of the image containers andd the end point of the animation
    const [imageWidth, setImageWidth] = useState(0)
    //this is a reference to the scrollDiv component
    const scrollRef = useRef();
    const progress = useRef(null)

    let start
    const animation = useRef(null);

    useEffect(()=>{
        const totalWidth = scrollRef.current.getBoundingClientRect().width

        function scrollAnimation(time){
            if (!start) start = time
            progress.current = Math.round((time - start) / props.fps)


            scrollRef.current.style.transform = `translate(-${progress.current}px)`;

            props.updateAnimationProgress(progress.current);

            if (progress.current < totalWidth){
                animation.current = requestAnimationFrame(scrollAnimation);
            }
            else if (progress.current >= totalWidth){
                props.sendScrollingData({animationEnd: 1});
                
                
            }
            
        }
        console.log(props.paws);
        if (props.paws === true){
            // console.log(animation.current);
            scrollRef.current.style.transform = `translate(-${props.startTime}px)`;

            cancelAnimationFrame(animation.currrent);

            
            // scrollAnimation(props.startTime)
            
            // start = props.currentTime

            
        }
        else animation.current = requestAnimationFrame(scrollAnimation)
        
        return ()=>{
            cancelAnimationFrame(animation)
        }
        
        
    }, [props.paws]);
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