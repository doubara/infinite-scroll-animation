import imageStyle from './ScrollImage.module.css';
import {useRef, useEffect, useContext} from 'react';
import ViewImageContext from './ViewImageContext';

const ScrollImage = (props)=>{
    const imageRef = useRef();
    const imageContext = useContext(ViewImageContext);
    useEffect(()=>{
        const imageRefWidth = imageRef.current.getBoundingClientRect().width
        props.onGetImageRefWidth(imageRefWidth);

        
    }, [])
    function updateImageContext(){
        imageContext.setUrl(props.image);
        
    }

    return (
        <div onClick={updateImageContext} ref={imageRef} className={imageStyle.imageContainer}>
            <img src={props.image} alt="a picture of me generated by dawn AI" />
        </div>
    )
}
export default ScrollImage;