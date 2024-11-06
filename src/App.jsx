import { Toaster } from 'react-hot-toast';
import useRouteElements from './routes/useRouteElements';

function App() {
  const routeElements = useRouteElements();
  return (
    <>
      {routeElements}
      <Toaster />
    </>
  );
}

export default App;
