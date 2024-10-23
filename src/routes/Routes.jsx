import { Routes as AppRoutes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import { RequireAuth } from '../components/RequireAuth';

const Routes =()=>{
  return(
    <AppRoutes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>  
      <Route path='/store' element={<RequireAuth><StorePage/></RequireAuth>}></Route>
      <Route path="/store/:productSlug" element={<RequireAuth><ProductPage/></RequireAuth>} />
     
    </AppRoutes>
  );

};

export default Routes;