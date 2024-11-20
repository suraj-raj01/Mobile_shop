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
// import GenerateBill from "./Pages/GenerateBill";

// brands tv
import AcerTv from "./Brand_Tv/AcerTv"
import MiTv from "./Brand_Tv/MiTv"
import SamsungTv from "./Brand_Tv/SamsungTv"
import LgTv from "./Brand_Tv/LgTv"
import AddData from "./AddData"
import Laptop from "./DatabaseForm/Laptop"
import Mobile from "./DatabaseForm/Mobile"
import TV from "./DatabaseForm/TV"
import Keyboard from "./DatabaseForm/Keyboard"
import Watches from "./DatabaseForm/Watches"
import Remote from "./DatabaseForm/Remote"
import Zebronics_keyboards from "./Brand_Keyboard/Zebronics_keyboard"
import Logitech from "./Brand_Keyboard/Logitech"
import Dell_Keyboard from "./Brand_Keyboard/Dell_Keyboard"
import Portronics from "./Brand_Keyboard/Portronics"
import Hp_Keyboards from "./Brand_Keyboard/Hp_Keyboard"
import All_Products from "./Pages/All_Products"
import AllWatch from "./Brand_Watches/AllWatch"
import MaleWatch from "./Brand_Watches/MaleWatch"
import FemaleWatch from "./Brand_Watches/FemaleWatch"
import KidsWatch from "./Brand_Watches/KidsWatch"
import Watch_Layout from "./Brand_Watches/Watch_Layout"
import BillCheckout from "./Pages/BillCheckout"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="/" element={<Products/>}>
          <Route index element={<All_Products/>}/>
          <Route path="products" element={<All_Products/>}/>
          <Route path="allproducts" element={<All_Products/>}/>
          <Route path="premiumproducts" element={<Premium/>}/>
        </Route> 
        <Route path="offer" element={<Offer/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="checkout/:id" element={<CheckOut/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="productsearch/:txtdata" element={<ProductSearch/>}/>

        <Route path="/" element={<AddData/>}>
          <Route path="adddata" element={<Mobile/>}/>
          <Route index element={<Mobile/>}/>
          <Route path="laptopdata" element={<Laptop/>}/>
          <Route path="mobiledata" element={<Mobile/>}/>
          <Route path="tvdata" element={<TV/>}/>
          <Route path="keyboarddata" element={<Keyboard/>}/>
          <Route path="watchdata" element={<Watches/>}/>
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

        {/*  watches */}
        <Route path="/"  element={<Watch_Layout/>}>
        <Route index element={<AllWatch/>}/>
        <Route path="allwatch" element={<AllWatch/>}/>
        <Route path="malewatch" element={<MaleWatch/>}/>
        <Route path="femalewatch" element={<FemaleWatch/>}/>
        <Route path="kidswatch" element={<KidsWatch/>}/>
        </Route>

        {/* // Keyboards */}
        <Route path="zebronics_key" element={<Zebronics_keyboards/>}/>
        <Route path="logitech" element={<Logitech/>}/>
        <Route path="dell_key" element={<Dell_Keyboard/>}/>
        <Route path="portronics" element={<Portronics/>}/>
        <Route path="hp_key" element={<Hp_Keyboards/>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="payments/:payopt" element={<Payment/>}/>
        {/* <Route path="generatebill" element={<GenerateBill/>}/> */}
        <Route path="billcheckout/:total" element={<BillCheckout/>}/>
       </Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
