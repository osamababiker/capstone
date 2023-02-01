import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from './components/About';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';

function Home() {
  return (
    <>
        <Header />
        <main>  
            <Dishes />
            <Testimonials />
            <About />
        </main>
        <Footer />
    </>
  )
}

export default Home