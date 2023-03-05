import React from "react";

const ViewImageContext = React.createContext(
    {
        url: '', 
        setUrl: ()=>{},
    }
);

export default ViewImageContext;