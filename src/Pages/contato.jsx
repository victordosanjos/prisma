import MainNavBar from '../components/home/MainNavBar';
import Form from '../components/contato/form';

function Contato () {
    return ( 
        <>

            <MainNavBar NavBarLogo={require('../images/logo-branca.png')} />
            <Form logo ={require('../images/logo-branca.png' )} />

        </>
        
        
     );
}

export default Contato;