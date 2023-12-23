import logo from './logo.svg';
import './App.css';
import { Cat } from './components/Cat';
import { QueryClient,QueryClientProvider } from 'react-query';

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false
      }
    }
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
