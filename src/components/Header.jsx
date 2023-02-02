import Logo from '../icons_assets/Logo.svg';
import HeaderImg from '../icons_assets/Mario and Adrian A-min.jpg';

function Header() {
    
    const menuToggler = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
     

  return (
    <header id="header">
            <nav className="topnav" id="myTopnav">
                <div className="navbar-brand">
                    <a href="/"><img src={Logo} alt="logo" /> </a>
                </div>
                <div className="navbar">
                    <a href="/">Home</a>
                    <a href="#news">About</a>
                    <a href="#contact">Menu</a>
                    <a href="/booking" role="button">Book a table</a>
                    <a href="#contact">Login</a>
                    <a href="#" className="icon" onClick={menuToggler}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <span>Chicago</span>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <button id="" className="">Book a table</button>
                </div>
                <div className="hero-img">
                    <img src={HeaderImg} alt="Mario and Adrian" />
                </div>
            </section>
        </header>
  )
}

export default Header