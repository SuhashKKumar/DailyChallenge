import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className='nav-logo' >Truelance.</h1>
      <ul className='nav-items' >
        <li className='nav-item' >
          <a>Explore</a>
        </li>
        <li className='nav-item' >
          <a>Become a Seller</a>
        </li>
        <li className='nav-item' >
          <a>Post a Project</a>
        </li>
        <li className='nav-item' >
          <a>Sign in</a>
        </li>
        <li className='nav-item' >
          <button>Join</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar