import styles from './styles.module.scss'
import { FaBars, FaTimes, FaReact } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';

export function Header() {
   const [clicked, setClicked] = useState(false);

   const handleClicked = () => {
      setClicked(!clicked);
   };
   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar__logo}>
            React <FaReact />{" "}
         </div>
         <div className={styles.navbar__menu_icon} onClick={handleClicked}>
            {clicked ? <FaTimes /> : <FaBars />}
         </div>
         <ul className={clicked ? styles.navbar__active : styles.navbar__menu}>
            <li>
               <div className={styles.navbar__link} onClick={handleClicked}>
                  <ActiveLink
                     href="/"
                     activeClassName={styles.navbar__link_active}
                  >
                     <a>Home</a>
                  </ActiveLink>
               </div>
            </li >
            <li>
               <div className={styles.navbar__link} onClick={handleClicked}>
                  <ActiveLink
                     href="/investimentos"
                     activeClassName={styles.navbar__link_active}
                  >
                     <a>Investimentos</a>
                  </ActiveLink>
               </div>
            </li >
         </ul>
      </nav>
   );
}