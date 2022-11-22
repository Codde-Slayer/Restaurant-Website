import FontAwesome from "react-fontawesome"
import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {
    return (
        <nav className="navbar">

            <div className="logo">
                <img src={"./logo.jpg"} height="60px" />

                <p>Caramielle</p>
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dishes">Dishes</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>   
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>   
                 <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>

            </ul>
            <div className="nav-icons">
                <img src={"./search.png"} height="60px" />
                <img src={"./favourites.jpg"} height="60px" />
                <img src={"./cart.png"} height="60px" />
            </div>

        </nav>
    )
}
export default Nav;