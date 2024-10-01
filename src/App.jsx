import { BrowserRouter,Routes,Route } from "react-router-dom"
import LayOut from "./Pages/LayOut"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Offer from "./Pages/Offer"
import MyCart from "./Pages/MyCart"
import Details from "./Pages/Details"
import Realme from "./Brands/Realme"
import Vivo from "./Brands/Vivo"
import Oppo from "./Brands/Oppo"
import ProductSearch from "./Pages/ProductSearch"
import Redmi from "./Brands/Redmi"
import Samsung from "./Brands/Samsung"
import IPhone from "./Brands/IPhone"
import Nothing from "./Brands/Nothing"
import Motorola from "./Brands/Motorola"
import Google from "./Brands/Google"
import Nokia from "./Brands/Nokia"
import Iqoo from "./Brands/Iqoo"
import OnePlus from "./Brands/OnePlus"
import CheckOut from "./Pages/CheckOut"
import Login from "./Login/Login"
import Register from "./Login/Register"
import Dashboard from "./Pages/Dashboard"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="offer" element={<Offer/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="checkout/:id" element={<CheckOut/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="productsearch/:txtdata" element={<ProductSearch/>}/>
        <Route path="realme" element={<Realme/>}/>
        <Route path="vivo" element={<Vivo/>}/>
        <Route path="oppo" element={<Oppo/>}/>
        <Route path="redmi" element={<Redmi/>}/>
        <Route path="iphone" element={<IPhone/>}/>
        <Route path="samsung" element={<Samsung/>}/>
        <Route path="nothing" element={<Nothing/>}/>
        <Route path="motorola" element={<Motorola/>}/>
        <Route path="google" element={<Google/>}/>
        <Route path="nokia" element={<Nokia/>}/>
        <Route path="iqoo" element={<Iqoo/>}/>
        <Route path="oneplus" element={<OnePlus/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
