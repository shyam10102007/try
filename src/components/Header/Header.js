import React from "react";
import resumeSvg from "../../assets/resume.svg"
import StyleSheet from './Header.module.css';
function Header(){
    return (
    <div className={StyleSheet.container}>
        <div className={StyleSheet.left}>
        <p className={StyleSheet.heading}>
            A <span> Resume </span> that stands out !</p>
        <p className={StyleSheet.heading}>
         Make your own resume. <span>It's free</span>
        </p>
        </div>
        <div className={StyleSheet.right}>
            <img src={resumeSvg} alt = 'Resume' />
        </div>
    </div>
   
   ); 
}
export default Header;