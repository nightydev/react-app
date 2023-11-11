import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import List from "./components/list/List";
import Details from "./components/new/Details"
import NotFounded from "./components/shared/notFounded";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFounded />} />
    </Routes>
  )
}
