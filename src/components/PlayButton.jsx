import style from './Button.module.css'

const PlayButton = (props) =>{
    const [paws, setPaws] = useState(false);
    function updatePawsState(event){
        setPaws(false)
        props.scrollPlayed(false)
    }
    return (
        <button onClick={updatePawsState} className={style.mainButton} type='button'>{props.children}</button>
    )
}
export default PlayButton