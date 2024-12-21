import React from "react";
import StyleSheet from "./InputControl.module.css"
function InputControl({Lable, ...props}) {
    return <div className={StyleSheet.container}>{Lable  && <lable>{Lable}</lable>}
    <input type ="text" {...props}/>
    </div>;
}

export default InputControl;