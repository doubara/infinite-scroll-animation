import react, { useState, useContext, useRef, useEffect } from 'react'
import './App.css'
import ScrollDiv from './components/ScrollDiv'
import ScrollContainer from './components/ScrollContainer';
import PawsButton from './components/PawsButton';
import PlayButton from './components/PlayButton';
import style from './components/Button.module.css';
// import image from './assets/IMG-1.jpg'
import ViewImageContext from './components/ViewImageContext';
import UpdateProgressContext from './components/UpdateProgressContext';

import ImageViewer from './components/ImageViewer';


function App() {
  const [paws, setPaws] = useState(false);

  const [progress, setProgress] = useState(null);

  const progressValue = {progress, setProgress};

  const [url, setUrl] = useState('');

  const urlValue = {url, setUrl};

  const startProgress = useRef(null);

  // function changePaws(val) {
  //   setPaws(previousVal=> !previousVal);
  // }
  // useEffect(()=>{
  //   // console.log(progress);
  //   function updateAnimationProgress(progress){
  //     startProgress.current = progress;
  //   }
  // })
  // console.log(startProgress.current);
  return (
    <UpdateProgressContext.Provider value={progressValue}>

      <ViewImageContext.Provider value={urlValue}>
        <div className="App">
        {/* <div>
          <button onClick={setPaws(true)} className={style.mainButton} type='button'>paws</button>

          <button onClick={setPaws(false)} className={style.mainButton} type='button'>play</button>
        </div> */}
        
        
        <div>
          <PawsButton scrollPawsed={()=> setPaws(previousVal=> !previousVal)}>{!paws ? 'Paws' : 'play'}</PawsButton>
        </div>
        
        <div>
          <ScrollContainer
          updateAnimationProgress={(progress)=> startProgress.current = progress}
          currentTime={startProgress.current} 
          pawsAnimation={paws} 
          fps={20}></ScrollContainer>
          <ScrollContainer
          updateAnimationProgress={(progress)=> startProgress.current = progress}
          currentTime={progress}
          pawsAnimation={paws}
          fps={10}></ScrollContainer>
        </div>
        <ImageViewer></ImageViewer>
      </div>
      </ViewImageContext.Provider>
    </UpdateProgressContext.Provider>
  )
}

export default App
