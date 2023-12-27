import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TIMEOUT = 1000;

const SLIDES = [
  "https://picsum.photos/id/10/300/100",
  "https://picsum.photos/id/20/300/100",
  "https://picsum.photos/id/30/300/100",
]

function App() {
  const [curSlide, setCurSlide] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [count, setCount] = useState(0)

  const handleSlidePrev = () => {
    let newIndex = curSlide - 1
    if(newIndex < 0){
      newIndex = SLIDES.length - 1
    }
    setCurSlide(newIndex)
  }

  const handleSlideNext = () => {
    setCurSlide((curSlide+1) % SLIDES.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(isPlaying){
        setCount(count+1)
        handleSlideNext()
      }
    }, TIMEOUT)
    return () => clearTimeout(timer)
   }, [count, isPlaying])

  return (
    <>
      <img src={SLIDES[curSlide]}></img>
      <div className='button-container'>
        <button onClick={() => handleSlidePrev()}>Prev</button>
        <button onClick={() => handleSlideNext()}>Next</button>
        <button onClick={() => setIsPlaying(true)}>Play</button>
        <button onClick={() => setIsPlaying(false)}>Stop</button>

      </div>
    </>
  )
}

export default App
