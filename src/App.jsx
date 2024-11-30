import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PodcastPreviews from './components/PodcastPreviews';
import PodcastDetails from './components/PodcastDetails';
import PreviewLayout from './components/PreviewLayout';
import SeasonsLayout from './components/SeasonsLayout';
import SeasonEpisodes from './components/SeasonEpisodes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route element={<PreviewLayout />}>
          <Route path='/previews' element={<PodcastPreviews/>} />

          <Route path='/previews/:id' element={<PodcastDetails/>} />
          <Route path='/previews/:id/season/:season' element={<SeasonsLayout/>}>
            <Route index element={<SeasonEpisodes/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App