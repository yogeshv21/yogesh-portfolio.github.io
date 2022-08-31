import './App.scss';

import {About, Header, Skills, Work, Footer, Testimonials} from '../src/containers';
import {Navbar} from './components'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
