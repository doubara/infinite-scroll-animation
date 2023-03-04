import style from './Button.module.css'
import {useState} from 'react';

const PawsButton = (props) =>{
    const [paws, setPaws] = useState(false);
    function updatePawsState(event){
        setPaws(true);
        props.scrollPawsed(!paws);
    }
    return (
        <button onClick={updatePawsState} className={style.mainButton} type='button'>{props.children}</button>
    )
}
export default PawsButton