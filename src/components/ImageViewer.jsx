import style from './ImageViewer.module.css'
import { useContext } from 'react';
import ViewImageContext from './ViewImageContext';

const ImageViewer = (props)=>{

    const {url, setUrl} = useContext(ViewImageContext);

    console.log(url)
    return (
        <div className={style.imageViewer}>
            {
                url === ''
                ? ''
                :
                (
                    <img src={url} alt="an AI image of Doubara generated using the DALLE-E protocol from dawn Ai app" />
                )
            }
        </div>
    )
}

export default ImageViewer;