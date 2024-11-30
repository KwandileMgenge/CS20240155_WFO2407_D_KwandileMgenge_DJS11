import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PodcastPreviews from './components/pages/PodcastPreviews';
import PodcastDetails from './components/PodcastDetails';
import PreviewLayout from './components/PreviewLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route  element={<PreviewLayout />}>
          <Route path='/previews' element={<PodcastPreviews/>} />
          <Route path='/previews/:id' element={<PodcastDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App