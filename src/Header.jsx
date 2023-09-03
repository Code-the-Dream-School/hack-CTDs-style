import React from 'react'
import logo from './assets/cropped-CTD_Logo_Lighter_Scheme.png'
import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { pink } from '@mui/material/colors';

export default function Header(props) {

    const [searchFocus, setSearchFocus] = React.useState(false)
    const {setClicked} = props;

    //handles color change for search icon
    const handleMouseEnter = () => {
        setSearchFocus(true);
    };

    const handleMouseLeave = () => {
        setSearchFocus(false);
    };

    //sets conditional render state to display search and hide header
    const handleClick = () => {
        setClicked(false);
    }
    
    return (
        <>
            <div className={styles.headerBox} data-aos="fade">
                <div className={styles.logoContainer}>
                    <a href=""><img src={logo} className={styles.logo} /></a>
                </div>
                <div className={styles.topLinks}>
                    <a href="" className={styles.navs}>About</a>
                    <a href="" className={styles.navs}>Get Involved</a>
                    <a href="" className={styles.navs}>Services</a>
                    <a href="" className={styles.navs}>Class Info</a>
                    <a href="" className={styles.navs}>Blog</a>
                    <a href="" className={`${styles.navs} ${styles.donate}`}>DONATE</a>
                </div>
                <div className={styles.topSearch}>
                    <SearchIcon
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        sx={()=> {
                            if(searchFocus){
                                return { color: pink[200] }
                            } else {
                                return { color: pink[900] }
                            }
                        }}
                        fontSize='large'
                    />
                </div>
            </div>
        </>
    );
}