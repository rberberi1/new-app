import Layout from './components/layout/Layout';
import './App.css';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>   
      <Layout>
        <Routes/>
      </Layout>
    
    </div>
    </BrowserRouter>
  );
}

export default App;