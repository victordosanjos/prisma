import { LojaNavBar } from '../components/home/MainNavBar';
import ChooseStore from '../components/loja/choose';

function Loja() {
    return ( 
        <>
        <LojaNavBar NavBarLogo={require('../images/logo-branca.png')} />
        <ChooseStore />
        </>
     );
}

export default Loja;