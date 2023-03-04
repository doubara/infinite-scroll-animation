import { useState } from 'react'
import './App.css'
import ScrollDiv from './components/ScrollDiv'
import ScrollContainer from './components/ScrollContainer';
import PawsButton from './components/PawsButton';
import PlayButton from './components/PlayButton';
import style from './components/Button.module.css';
// import image from './assets/IMG-1.jpg'


function App() {
  const [paws, setPaws] = useState(false);
  function changePaws(val) {
    setPaws(previousVal=> !previousVal);
  }
  return (
    <div className="App">
      {/* <div>
        <button onClick={setPaws(true)} className={style.mainButton} type='button'>paws</button>

        <button onClick={setPaws(false)} className={style.mainButton} type='button'>play</button>
      </div> */}
      
      
      <div>
        <PawsButton scrollPawsed={changePaws}>{!paws ? 'Paws' : 'play'}</PawsButton>
      </div>
      
      <div>
        <ScrollContainer pawsAnimation={paws} fps={20}></ScrollContainer>
        <ScrollContainer pawsAnimation={paws} fps={10}></ScrollContainer>
      </div>
    </div>
  )
}

export default App
