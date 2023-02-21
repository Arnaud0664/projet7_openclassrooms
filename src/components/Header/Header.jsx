import logo from '../../assets/images/logo.png';
import Nav from '../Nav/Nav';

function Header() {
    return (
        <header className= '_Header-m'><img src={logo} alt= 'logo Kasa' className= 'header-logo' />
        <Nav className= 'header-nav'/></header>
    )


}

export default Header;