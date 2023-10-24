
import styleContext from "../context/styleContext";
import { useContext } from "react";

import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Hello = () => {
  const {style, dayTheme, nightTheme} = useContext(styleContext);

  const {backgroundColor, color, border} = style;

    return(
        <div>
            <div style={{
                backgroundColor: backgroundColor,
                color: color,
                border: border,
            }}>
                <h1>Hello World</h1>
                <p>This is a paragraph</p>
                <button>Click Me</button>
            </div>
            <br />
            <button onClick={nightTheme} > Change to Night </button>
            {/* <button onClick={dayTheme} > Change to Day </button> */}
            {/* only use one button to witch theme, also change icons based ont theme change */}
        </div>
    )
}

export default Hello;