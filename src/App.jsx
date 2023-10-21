import Task from "./components/list/Task";
import Content from "./components/shared/Content";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Content>
        <Task></Task>
      </Content>
      <Footer></Footer>
    </div>
  )
}
