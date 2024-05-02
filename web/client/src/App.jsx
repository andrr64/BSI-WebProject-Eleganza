import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Homepage from "./pages/Homepage"
import Man from "./pages/Collection/Man";
import Woman from "./pages/Collection/Woman";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/collection/man' element={<Man/>} />
        <Route path='/collection/woman' element={<Woman/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App