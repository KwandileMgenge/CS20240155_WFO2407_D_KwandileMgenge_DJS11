import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PodcastPreviews from './components/pages/PodcastPreviews';
import PodcastDetails from './components/pages/PodcastDetails';
import PreviewLayout from './components/PreviewLayout';
import SeasonsLayout from './components/SeasonsLayout';
import PodcastSeasons from './PodcastSeasons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route element={<PreviewLayout />}>
          <Route path='/previews' element={<PodcastPreviews/>} />

          <Route path='/previews/:id' element={<PodcastDetails/>}>
            <Route path='/previews/:id/' element={<SeasonsLayout/>}>
              <Route path='/previews/:id/season/:season' element={<PodcastSeasons />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App