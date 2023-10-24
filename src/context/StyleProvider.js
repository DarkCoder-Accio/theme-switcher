import styleContext from "./styleContext";
import { useState } from "react";


let dayStyle = {
        backgroundColor: "white",
        color: "black",
        border: "2px solid red",
        textAlign: "left",
}

const StyleProvider = ({ children }) => {
      const [style, setStyle] = useState(dayStyle);

      return(
        <styleContext.Provider value={
          { 
            
          style:style,  
          dayTheme: ()=>setStyle(dayStyle),
          nightTheme: ()=>setStyle({...style, backgroundColor:"black", color:"white", border:"2px solid blue", textAlign:"center"})
        
          }
          
          }>
          {children}
        </styleContext.Provider>
      )
      
}

export default StyleProvider;