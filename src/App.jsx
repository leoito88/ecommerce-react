import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Header from './components/Header'; 
import {QueryClientProvider , QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
  <BrowserRouter>
    <>
      <Header />
      <div style={{
        height : "100px"
        }}></div>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
    </>
  </BrowserRouter> 
  );
}

export default App
