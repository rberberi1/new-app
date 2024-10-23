import { Routes as AppRoutes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import StorePage from '../pages/StorePage';

const Routes =()=>{
  return(
    <AppRoutes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
    </AppRoutes>
  );

};

export default Routes;