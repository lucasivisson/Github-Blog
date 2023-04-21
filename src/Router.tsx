import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultLayout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout/>} errorElement={<Navigate to="/"/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="issue/:issueId" element={<Post/>}></Route>
    </Route>
  )
)