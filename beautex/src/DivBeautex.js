import './beautex.scss';
import { FiAlignJustify } from "react-icons/fi";
// import { IoPersonOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import logo from "./images/logo.jpeg";
import blazerswomen from "./images/blazerswomen.jpeg";
import blazers from "./images/blazers.jpeg";
import dresseswomen from "./images/dresseswomen.png";
import trouserswomen from "./images/trouserswomen.jpeg";
import polo from "./images/polo.jpeg";
import shortswomen from "./images/shortswomen.jpeg";
import shortsmen from "./images/shortsmen.jpeg";
import stylemen from "./images/stylemen.jpeg";
import accessmen from "./images/accessmen.jpeg";
import accesswomen from "./images/accesswomen.jpeg";
import bagswomen from "./images/bagswomen.webp";
import knitwear from "./images/knitwear.webp";
import bigpromo from "./images/bigpromo.jpg";


function DivBeautex() {
    const myClothes = [
        {categories: "dresses", size: "medium", price: 80000, img: dresseswomen},
        {categories: "trouserswomen", size: "medium", price: 70000, img: trouserswomen },
        {categories: "polo", size: "large", price: 50000, img: polo },
        {categories: "blazers", size: "medium", price: 100000, img: blazers},
        {categories: "shortswomen", size: "medium", price: 50000, img: shortswomen},
        {categories: "accesswomen", size: "all", price: 100000, img: accesswomen},
        {categories: "accessmen", size: "all", price: 50000, img: accessmen},
        {categories: "shortsmen", size: "large", price: 70000, img: shortsmen},
        {categories: "knitwear", size: "medium", price: 50000, img: knitwear},
        {categories: "stylemen", size: "medium", price: 100000, img: stylemen},
        {categories: "bagswomen", size: "all", price: 100000, img: bagswomen},
        {categories: "blazerswomen", size: "all", price: 100000, img: blazerswomen}
    ];
    return (<>
        <div>
            <header className="myStyle1" >
                <div className="myStyle1a">
                    <FiAlignJustify className='icon1' />
                    <h1 className="coName1">ARABELLE</h1>
                    <img src={logo} className="logo1" />
                    <div className="search-box">
                        <i className="fa fa-search"></i>
                        <input type="text" className="input1" placeholder="Search products, brands, categories..." />
                    </div>
                    <button className="button1">Search</button>
                    <span>
                        {/* <IoPersonOutline className="accountIcon" /> */}
                        <select id="accountInfo" name="accountInfo" className="myAccountInfo">
                            <option value="account" className="myAccountInfo">Account</option>
                            <option className="login"><button>Sign In</button></option>
                            <option value="indAccount" className="myAccountInfo">My Account</option>
                            <option value="orders" className="myAccountInfo">Orders</option>
                            <option value="list" className="myAccountInfo">Wish List</option>
                        </select>
                    </span>
                    {/* <GoQuestion /> */}
                    <select id="helpOptions" name="helpOptions" className="help">
                        <option value="apple">help</option>
                        <option value="banana">Help center</option>
                        <option value="orange">Place an order</option>
                        <option value="mango">Payment Options</option>
                        <option value="mango">Returns and Refunds</option>
                        <option value="mango">Waranty</option>
                        <option value="mango">Live Help</option>
                        <option value="mango">WhatsApp</option>
                    </select>
                    <button className="cart"><IoCartOutline />Cart</button>
                </div>
            </header>

            <div className="myStyle2"> 

                <div className="parent0"> <img src={bigpromo} className="parent0pic" /></div>
                <br />
                <div className="parent1">
                    {myClothes.map(piece => (
                        <div className="boxes">
                            <img src={piece.img} className="boxes1"/>
                            <p className="myCategories">{piece.categories}</p>
                        </div>
                    ))}
                    {/* <div className="boxes"><img src={blazerswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={dresseswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={trouserswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={shortswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={accesswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={bagswomen} className="boxes1" /></div>
                    <div className="boxes"><img src={polo} className="boxes1" /></div>
                    <div className="boxes"><img src={shortsmen} className="boxes1" /></div>
                    <div className="boxes"><img src={blazers} className="boxes1" /></div>
                    <div className="boxes"><img src={accessmen} className="boxes1" /></div>
                    <div className="boxes"><img src={stylemen} className="boxes1" /></div>
                    <div className="boxes"><img src={knitwear} className="boxes1" /></div> */}
                </div>
            </div>
        </div >
    </>
    )
}
export default DivBeautex