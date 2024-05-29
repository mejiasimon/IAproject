import { Route,Routes } from "react-router-dom";
//components
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/navBar/Navbar";
import { Feature } from "../components/feature/Feature";
import { Cta } from "../components/cta/Cta";
import { Brand } from "../components/brand/Brand";
import { Article } from "../components/article/Article";
//containers
import { Blog } from "../containers/blog/Blog";
import { Features } from "../containers/features/Features";
import { Footer } from "../containers/footer/Footer";
import { Header } from "../containers/header/Header";
import { Possibility } from "../containers/possibility/Possibility";
import { WhatGpt } from "../containers/whatGpt3.5/WhatGpt3.5";

export function Rutas(){
return(
    <>
    <Navbar/>
    <Routes>
//components
<Route path="/" element={<Home/>}></Route>
<Route path="/Article" element={<Article/>}></Route>
<Route path="/Brand" element={<Brand/>}></Route>
<Route path="/Cta" element={<Cta/>}></Route>
<Route path="/Feature" element={<Feature/>}></Route>
//containers
<Route path="/Blog" element={<Blog/>}></Route>
<Route path="/Features" element={<Features/>}></Route>
<Route path="/Footer" element={<Footer/>}></Route>
<Route path="/Header" element={<Header/>}></Route>
<Route path="/Possibility" element={<Possibility/>}></Route>
<Route path="/WhatGpt" element={<WhatGpt/>}></Route>

    </Routes>
    </>
)
}