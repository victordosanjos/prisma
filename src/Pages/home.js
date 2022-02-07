import BigHero from '../components/home/BigHero';
import MainNavBar from '../components/home/MainNavBar'

function HomePage() {
    return (
        <>
        <MainNavBar NavBarLogo={require('../images/logo-branca.png')} />
        <BigHero bgHero={require('../images/logo-branca-sombreada.webp')} />
        </>
     );
}

export default HomePage;