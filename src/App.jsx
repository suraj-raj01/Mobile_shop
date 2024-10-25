import { BrowserRouter,Routes,Route } from "react-router-dom"
import LayOut from "./Pages/LayOut"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Offer from "./Pages/Offer"
import MyCart from "./Pages/MyCart"
import Details from "./Pages/Details"
import Realme from "./Brand_Mobile/Realme"
import Vivo from "./Brand_Mobile/Vivo"
import Oppo from "./Brand_Mobile/Oppo"
import ProductSearch from "./Pages/ProductSearch"
import Redmi from "./Brand_Mobile/Redmi"
import Samsung from "./Brand_Mobile/Samsung"
import IPhone from "./Brand_Mobile/IPhone"
import Nothing from "./Brand_Mobile/Nothing"
import Motorola from "./Brand_Mobile/Motorola"
import Google from "./Brand_Mobile/Google"
import Nokia from "./Brand_Mobile/Nokia"
import Iqoo from "./Brand_Mobile/Iqoo"
import OnePlus from "./Brand_Mobile/OnePlus"

// laptop items
import Acer from "./Brand_Laptop/Acer"
import Asus from "./Brand_Laptop/Asus"
import Dell from "./Brand_Laptop/Dell"
import HP from "./Brand_Laptop/Hp"
import Lenovo from "./Brand_Laptop/Lenovo"
import Mac from "./Brand_Laptop/Mac"
import Zebronics from "./Brand_Laptop/Zebronics"

import CheckOut from "./Pages/CheckOut"
import Login from "./Login/Login"
import Register from "./Login/Register"
import Dashboard from "./Pages/Dashboard"
import Payment from "./Pages/Payments"
import Services from "./Pages/Services"
import Premium from "./Pages/Premium"
import GenerateBill from "./Pages/GenerateBill";
import AcerTv from "./Brand_Tv/AcerTv"
import MiTv from "./Brand_Tv/MiTv"
import SamsungTv from "./Brand_Tv/SamsungTv"
import LgTv from "./Brand_Tv/LgTv"
import AddData from "./AddData"
import Laptop from "./DatabaseForm/laptop"
import Mobile from "./DatabaseForm/mobile"
import TV from "./DatabaseForm/TV"
import Keyboard from "./DatabaseForm/Keyboard"
import Mouse from "./DatabaseForm/Mouse"
import Remote from "./DatabaseForm/Remote"


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
        <Route path="services" element={<Services/>}/>
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="checkout/:id" element={<CheckOut/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="productsearch/:txtdata" element={<ProductSearch/>}/>

        <Route path="/" element={<AddData/>}>
          <Route path="adddata" element={<Laptop/>}/>
          <Route index element={<Laptop/>}/>
          <Route path="laptopdata" element={<Laptop/>}/>
          <Route path="mobiledata" element={<Mobile/>}/>
          <Route path="tvdata" element={<TV/>}/>
          <Route path="keyboarddata" element={<Keyboard/>}/>
          <Route path="mousedata" element={<Mouse/>}/>
          <Route path="remotedata" element={<Remote/>}/>
        </Route>
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

        // Laptops
        <Route path="acer" element={<Acer/>}/>
        <Route path="asus" element={<Asus/>}/>
        <Route path="dell" element={<Dell/>}/>
        <Route path="hp" element={<HP/>}/>
        <Route path="lenovo" element={<Lenovo/>}/>
        <Route path="mac" element={<Mac/>}/>
        <Route path="zebronics" element={<Zebronics/>}/>

        // TV
        <Route path="acertv" element={<AcerTv/>}/>
        <Route path="mitv" element={<MiTv/>}/>
        <Route path="samsungtv" element={<SamsungTv/>}/>
        <Route path="lgtv" element={<LgTv/>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="payments" element={<Payment/>}/>
        <Route path="generatebill" element={<GenerateBill/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
