import "./App.css";
import List from "./components/list/List";
import Content from "./components/shared/Content";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Content>
        <List></List>
      </Content>
      <Footer></Footer>
    </div>
  )
}
