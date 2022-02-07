import { Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/home';
import Loja from '../Pages/loja';
import Contato from '../Pages/contato';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/lojinha" element={<Loja />} />
            <Route path="/contato" element = {<Contato />}/>
        </Routes>
      );
}
