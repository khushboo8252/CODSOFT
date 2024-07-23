import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../components/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar;