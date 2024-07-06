import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import toggle from '../../assets/toggle.svg';
import close from '../../assets/colse.svg'; // Ensure the import name is correct
import logo from '../../assets/logo.svg'; // Ensure the import name is correct


const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return (
        <div className='navbar'>
            {/* <img 
                src="data:image/svg+xml,<svg%20width='109'%20height='57'%20viewBox='0%200%20109%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'><path%20d='M68%2042.39C68%2041.3438%2068.9096%2040.53%2069.9493%2040.6459L101.251%2044.136C105.227%2044.5794%20108.591%2041.226%20108.161%2037.2483C107.713%2033.1161%20103.434%2030.5622%2099.5844%2032.1306L70.4171%2044.0151C69.2629%2044.4854%2068%2043.6363%2068%2042.39Z'%20fill='url(%23paint0_linear_2205_14)'/><path%20d='M0.9%2045L13.635%2013.365H18.63L31.32%2045H24.795L14.985%2019.035H17.235L7.29%2045H0.9ZM7.65%2039.105V33.975H24.66V39.105H7.65ZM34.778%2045V12.465H40.673V45H34.778ZM56.2911%2045.45C54.0111%2045.45%2051.9861%2044.97%2050.2161%2044.01C48.4461%2043.02%2047.0361%2041.67%2045.9861%2039.96C44.9661%2038.25%2044.4561%2036.3%2044.4561%2034.11C44.4561%2031.95%2044.9511%2030.03%2045.9411%2028.35C46.9611%2026.64%2048.3411%2025.29%2050.0811%2024.3C51.8211%2023.28%2053.7561%2022.77%2055.8861%2022.77C57.9861%2022.77%2059.8311%2023.25%2061.4211%2024.21C63.0411%2025.14%2064.3011%2026.43%2065.2011%2028.08C66.1311%2029.7%2066.5961%2031.545%2066.5961%2033.615C66.5961%2034.005%2066.5661%2034.41%2066.5061%2034.83C66.4761%2035.22%2066.4011%2035.67%2066.2811%2036.18L48.0111%2036.225V31.815L63.5361%2031.77L61.1511%2033.615C61.0911%2032.325%2060.8511%2031.245%2060.4311%2030.375C60.0411%2029.505%2059.4561%2028.845%2058.6761%2028.395C57.9261%2027.915%2056.9961%2027.675%2055.8861%2027.675C54.7161%2027.675%2053.6961%2027.945%2052.8261%2028.485C51.9561%2028.995%2051.2811%2029.73%2050.8011%2030.69C50.3511%2031.62%2050.1261%2032.73%2050.1261%2034.02C50.1261%2035.34%2050.3661%2036.495%2050.8461%2037.485C51.3561%2038.445%2052.0761%2039.195%2053.0061%2039.735C53.9361%2040.245%2055.0161%2040.5%2056.2461%2040.5C57.3561%2040.5%2058.3611%2040.32%2059.2611%2039.96C60.1611%2039.57%2060.9411%2039%2061.6011%2038.25L65.0661%2041.715C64.0161%2042.945%2062.7261%2043.875%2061.1961%2044.505C59.6961%2045.135%2058.0611%2045.45%2056.2911%2045.45ZM91.3918%2045L82.3018%2030.915H81.4018L69.0718%2013.365H76.3168L85.3618%2026.64H86.2618L98.5468%2045H91.3918ZM68.5318%2045L80.3668%2028.08L84.8668%2031.095L75.4618%2045H68.5318ZM86.5768%2029.97L82.0768%2026.955L91.0768%2013.365H98.0068L86.5768%2029.97Z'%20fill='white'/><defs><linearGradient%20id='paint0_linear_2205_14'%20x1='219.1'%20y1='39.9983'%20x2='202.599'%20y2='91.4037'%20gradientUnits='userSpaceOnUse'><stop%20stop-color='%23DF8908'/><stop%20offset='1'%20stop-color='%23B415FF'/></linearGradient></defs></svg>"
                alt="" 
            /> */}
            <img src={logo} alt="" />
            <img src={toggle} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={close} alt="" onClick={closeMenu} className='nav-mob-close' />
                <li>
                    <AnchorLink className='anchor-link' href='#hero'>
                        <p onClick={() => setMenu("hero")}>Home</p>
                    </AnchorLink>
                    {menu === "hero" ? <img src={underline} alt="underline" /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#Education'>
                        <p onClick={() => setMenu("Education")}>Education</p>
                    </AnchorLink>
                    {menu === "Education" ? <img src={underline} alt="underline" /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#Projects'>
                        <p onClick={() => setMenu("Projects")}>Projects</p>
                    </AnchorLink>
                    {menu === "Projects" ? <img src={underline} alt="underline" /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#Footer'>
                        <p onClick={() => setMenu("Contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "Contact" ? <img src={underline} alt="underline" /> : null}
                </li>
            </ul>
            <div className='nav-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#Footer'>
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;
