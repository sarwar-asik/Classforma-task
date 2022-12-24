
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DocumentPage from './components/DocumentPage';
import Home from './components/Home';

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home/>     
    },
    {
      path:'/DocumentPage/:name',
      element:<DocumentPage/>
    }

  ])
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
