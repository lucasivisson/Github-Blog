import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultLayout';
import { Home } from './pages/Home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <DefaultLayout/>,
//     children: [
//       {
//         path: '/',
//         element: <h1>Issue</h1>
//       }
//     ]
//   }
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout/>}>
      <Route path="" element={<Home/>}></Route>
    </Route>
  )
)