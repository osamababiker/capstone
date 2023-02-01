import AboutImageOne from '../icons_assets/Mario and Adrian A-min.jpg';
import AboutImageTwo from '../icons_assets/Mario and Adrian b-min.jpg';

function About() {
  return (
    <section id="about">
        <div className="about-content">
            <h1>Little Lemon</h1>
            <span>Chicago</span>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
        </div>
        <div className="about-images">
            <img src={AboutImageOne} alt="About " />
            <img src={AboutImageTwo} alt="About" />
        </div>
    </section>
  )
}

export default About