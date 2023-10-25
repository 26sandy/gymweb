
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import Notfound from './pages/notFound/Notfound';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Footer from './Components/Footer';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='trainers' element={<Trainers/>}/>
      <Route path='*' element={<Notfound/>}/>
     </Routes>
     <Footer/>
     </div>
  );
}

export default App;
