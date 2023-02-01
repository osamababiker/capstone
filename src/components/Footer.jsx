import Logo from '../icons_assets/Logo.svg';

function footer() {
  return (
    <footer id="footer">
            <div className="">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="">
                <h2>Doormat navigation</h2>
                <ul>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Contact us</a> </li>
                    <li> <a href="#">Terms & Condition</a> </li>
                    <li> <a href="#">Privacy</a> </li>
                    <li> <a href="#">Login</a> </li>
                </ul>
            </div>
            <div className="">
                <h2>Contact</h2>
                <ul>
                    <li> <a href="#">Address</a> </li>
                    <li> <a href="#">Email </a> </li>
                    <li> <a href="#">Phone Number</a> </li>
                </ul>
            </div>
            <div className="">
                <h2>Social Media Links</h2>
                <ul>
                    <li> <a href="#">Facebook</a> </li>
                    <li> <a href="#">Instigram </a> </li>
                    <li> <a href="#">Twitter</a> </li>
                </ul>
            </div>
        </footer>
  )
}

export default footer