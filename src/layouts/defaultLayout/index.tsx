import { Outlet } from 'react-router-dom'
import cover from '../../assets/cover.svg'
import { DefaultLayoutContainer, OutletContainer } from './style'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <img src={cover}/>
      <OutletContainer>
        <Outlet/>
      </OutletContainer>
    </DefaultLayoutContainer>
  )
}