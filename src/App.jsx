import react, { useState, useContext } from 'react'
import './App.css'
import ScrollDiv from './components/ScrollDiv'
import ScrollContainer from './components/ScrollContainer';
import PawsButton from './components/PawsButton';
import PlayButton from './components/PlayButton';
import style from './components/Button.module.css';
// import image from './assets/IMG-1.jpg'
import ViewImageContext from './components/ViewImageContext';
import ImageViewer from './components/ImageViewer';


function App() {
  const [paws, setPaws] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(null);
  const [url, setUrl] = useState('')
  const value = {url, setUrl}
  function changePaws(val) {
    setPaws(previousVal=> !previousVal);
  }

  function updateAnimationProgress(progress){
    console.log(progress);
    // setAnimationProgress(progress);
    
  }
  return (
    <ViewImageContext.Provider value={value}>
      <div className="App">
      {/* <div>
        <button onClick={setPaws(true)} className={style.mainButton} type='button'>paws</button>

        <button onClick={setPaws(false)} className={style.mainButton} type='button'>play</button>
      </div> */}
      
      
      <div>
        <PawsButton scrollPawsed={changePaws}>{!paws ? 'Paws' : 'play'}</PawsButton>
      </div>
      
      <div>
        <ScrollContainer
        updateAnimationProgress={updateAnimationProgress}
        currentTime={animationProgress} pawsAnimation={paws} 
        fps={20}></ScrollContainer>
        <ScrollContainer
        updateAnimationProgress={updateAnimationProgress}
        currentTime={animationProgress}
        pawsAnimation={paws}
        fps={10}></ScrollContainer>
      </div>
      <ImageViewer></ImageViewer>
    </div>
    </ViewImageContext.Provider>
  )
}

export default App
