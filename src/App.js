import Layout from './components/layout/Layout';
import './App.css';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <b>Hello</b> <br /> Refer to{' '}
      <a href="https://reactrouter.com/en/main" target="_blank">
        React router docs
      </a>{' '}
      for documentations 
    
      <Layout>
        <Routes></Routes>
      </Layout>
    
    </div>
    </BrowserRouter>
  );
}

export default App;