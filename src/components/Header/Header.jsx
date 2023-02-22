import logo from '../../assets/images/logo.png';
import Nav from '../Nav/Nav';
import styles from '../../assets/modules_css/Header.module.css';

function Header() {
    return (
        <header className= {styles.header_contenair}>
            <img src={logo} alt= 'logo Kasa' className= 'header-logo' />
            <Nav className= 'header-nav'/></header>
    )


}

export default Header;