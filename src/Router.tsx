import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

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
      <Route path="/post/:postId" element={<Post/>}></Route>
    </Route>
  )
)