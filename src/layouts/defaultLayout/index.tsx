import cover from '../../assets/cover.svg'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <img src={cover}/>
      <Outlet />
    </>
  )
}