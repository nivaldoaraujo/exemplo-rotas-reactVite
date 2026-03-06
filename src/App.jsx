import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contato from "./page/Contatos"
import Home from "./page/Home"
import Sobre from "./page/Sobre"
import Menu from "./components/Menu"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contato />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
