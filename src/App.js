import Layout from './components/layout/Layout';
import './App.css';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/auth';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <div>   
      <Layout>
        <Routes/>
      </Layout>
    
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;