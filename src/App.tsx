import { About } from "./components/About"
import { CardPost } from "./components/Card"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Info } from "./components/Info"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <CardPost />
      <About />
      <Info />
      <Form />
      <Footer/>
    </>
  )
}

export default App
