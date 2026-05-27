import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'
import { Search, Bell, User, ChevronDown } from 'lucide-react'
import styles from './Header.module.css'
function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);
    const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

// for blur
const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
  const handlescroll = () => {
    if (window.scrollY > 50) {setscrolled(true)}
  }
  window.addEventListener("scroll", handlescroll);
  return () => window.removeEventListener("scroll", handlescroll);

  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* logo */}
        <img src={Logo} alt="Logo" className={styles.logo} />

        {/* navigation links */}
        <nav className={styles.nav}>
          <Link to="#" className={styles.navLink}>Home</Link>
          <Link to="#" className={styles.navLink}>TV Shows</Link>
          <Link to="#" className={styles.navLink}>Movies</Link>
          <Link to="#" className={styles.navLink}>New & Popular</Link>
          <Link to="#" className={styles.navLink}>My List</Link>
          <Link to="#" className={styles.navLink}>Browse by Languages</Link>
        </nav>

        {/* right side section */}
        <div className={styles.actions}>
          {/* search */}
        <div className={styles.searchDiv}>
          <button
          onClick={()=>setIsSearchOpen (!isSearchOpen)}
          className={styles.searchButton} aria-label="Search">
            <Search size={20} />
          </button>
          {isSearchOpen && <input type="text" className={styles.searchInput} placeholder="Titles, people, genres" />}
        </div>

        {/* notifications */}
          <button className={styles.iconButton} aria-label="Notifications">
            <Bell size={20} />
            <span  className={styles.NotifBadge} >4</span>
          </button>
            {/* profile */}
        <div className={styles.profileDiv} ref={profileMenuRef}>
          <button
            onClick={toggleProfileMenu}
            className={styles.profileButton}
            aria-label="Profile"
            type="button"
          >
            <div className={styles.userAvatar}>
              <User size={20} />
            </div>
            <ChevronDown size={20} />
          </button>

          {isProfileMenuOpen && (
            <div className={styles.profileMenu}>
              <a href="#" className={styles.profileMenuItem}>Account</a>
              <a href="#" className={styles.profileMenuItem}>Help Center</a>
              <div className={styles.profileMenuDivider} />
              <button type="button" className={styles.profileMenuItem}>Sign Out</button>
            </div>
          )}
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header