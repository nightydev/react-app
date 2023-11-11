import { Outlet } from "react-router-dom"
import List from "../list/List"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Content>
        <Outlet></Outlet>
      </Content>
      <Footer></Footer>
    </>
  )
}
