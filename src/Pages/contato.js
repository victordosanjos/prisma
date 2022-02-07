import { ContatoNavBar } from '../components/home/MainNavBar';
import Form from '../components/contato/form';

function Contato () {
    return ( 
        <>

            <ContatoNavBar NavBarLogo={require('../images/logo-branca.png')} />
            <Form logo ={require('../images/logo-branca.png' )} />

        </>
        
        
     );
}

export default Contato;