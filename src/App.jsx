
import Contact from './Pages/contact.jsx'
import Home from './Pages/home.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/about.jsx'
import Job from './Pages/job.jsx'
import NoPage from './Pages/NoPage.jsx'
import GetStarted from './Pages/getStarted.jsx'

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
             <Route index element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path='/job' element = {<Job />}/>
             <Route path='/get-started' element = {<GetStarted/>}/>
             <Route path='*' element = {< NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
