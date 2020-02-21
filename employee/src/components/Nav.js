  
import React from "react";

const styles = {
    h1: {
        textAlign: "center",
        color: "black"
    },
    head: {
        backgroundColor: "orange",

    }
   
}

function Nav () {
    return (
        <div style={styles.head}>
            <h1 style={styles.h1}>Employee Directory</h1>
        </div>
    )
}

export default Nav;