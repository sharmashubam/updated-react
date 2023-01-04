import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Work from './components/Work';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shubam Sharma | Portfolio | FRONT END DEVELOPER</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <Work />
      <Resume />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
