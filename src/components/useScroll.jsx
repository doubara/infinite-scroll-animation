import {useRef, useEffect} from 'react';

const useScroll = (begin, end, component)=>{
    let start = useRef(0);
    // let progress
    useEffect(()=>{
        function startAnimation(timestamp){
            start.current += 1
            // progress = timestamp
            console.log(start);
            coomponent.style.transform = `translateX(-${start.current}px)`
            if (start.current <= 3050) window.requestAnimationFrame(startAnimation)
            
        }
        window.requestAnimationFrame(startAnimation)
    }, [start])
};

export default useScroll;