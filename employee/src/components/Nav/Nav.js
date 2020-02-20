  
import React from "react";

const styles = {
    h1: {
        textAlign: "center",
        color: "white"
    },
    head: {
        backgroundColor: "blue",

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