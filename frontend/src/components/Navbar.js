const { Link } = require("react-router-dom")

const Navbar = ()=> {

    return(
        <header>
            <div className="container">
                <Link to="/">
                <h1>Workout Master </h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar