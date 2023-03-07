import style from './ScrollContainer.module.css';
import ScrollDiv from './ScrollDiv';
import { useState } from 'react';

//image imports
import image1 from '../assets/IMG-1.jpg';
import image2 from '../assets/IMG-2.jpg';
import image3 from '../assets/IMG-3.jpg';
import image4 from '../assets/IMG-4.jpg';
import image5 from '../assets/IMG-5.jpg';
import image6 from '../assets/IMG-6.jpg';
import image7 from '../assets/IMG-7.jpg';
import image8 from '../assets/IMG-8.jpg';
import image9 from '../assets/IMG-9.jpg';
import image10 from '../assets/IMG-10.jpg';

const ScrollContainer = (props)=>{
    const arr1 = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
    const arr2 = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
    const [imagesArray, setImagesArray] = useState([arr1, arr2])

    function onFinishedScrolling(value){
        if (value.animationEnd){
            setImagesArray((previousVal)=>{
                const [firstList, secondList] = previousVal
                return [secondList, firstList]
                
            })
        }
    }
    function updateAnimationProgress(progress){
        props.updateAnimationProgress(progress);
        
    }

    return (
        <div className={style.scrollContainer}>
            {
                imagesArray.map((value, index)=>{
                    return <ScrollDiv paws={props.pawsAnimation} fps={props.fps} iterationNumber = {index+1} 
                    key={Math.random()*23474} sendScrollingData={onFinishedScrolling} 
                    images={value}
                    updateAnimationProgress={updateAnimationProgress}
                    startTime={props.currentTime}></ScrollDiv>
                })
            }
        </div>
    )
}

export default ScrollContainer;