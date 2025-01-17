import './App.css'
import Footer from './components/Footer'
import Quiztion1 from './components/Quiztion1'
import Quiztion2 from './components/Quiztion2'
import Quiztion3 from './components/Quiztion3'
import Quiztion4 from './components/Quiztion4'
import Quiztion5 from './components/Quiztion5'
import Quiztion6 from './components/Quiztion6'
import Quiztion7 from './components/Quiztion7'
import Quiztion8 from './components/Quiztion8'
import Quiztion9 from './components/Quiztion9'
import Quiztion10 from './components/Quiztion10'
import Quiztion12 from './components/Quiztion12'
import Quiztion13 from './components/Quiztion13'
import Quiztion14 from './components/Quiztion14'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-gray-700 to-gray-900">
            <Router>
              <Routes>
                <Route path="/" element={<Quiztion1 />} />
                <Route path="/quiztion2" element={<Quiztion2 />} />
                <Route path="/quiztion3" element={<Quiztion3 />} />
                <Route path="/quiztion4" element={<Quiztion4 />} />
                <Route path="/quiztion5" element={<Quiztion5 />} />
                <Route path="/quiztion6" element={<Quiztion6 />} />
                <Route path="/quiztion7" element={<Quiztion7 />} />
                <Route path="/quiztion8" element={<Quiztion8 />} />
                <Route path="/quiztion9" element={<Quiztion9 />} />
                <Route path="/quiztion10" element={<Quiztion10 />} />
                <Route path="/quiztion12" element={<Quiztion12 />} />
                <Route path="/quiztion13" element={<Quiztion13 />} />
                <Route path="/quiztion14" element={<Quiztion14 />} />
              </Routes>
            </Router>
        <Footer/>
      </div>

    </>
  )
}

export default App
