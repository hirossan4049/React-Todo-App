import PropTypes from "prop-types"
import {useState} from "react";
import styles from "./Header.module.css";


const Header = ({title, onAdd}) => {
    // const onClick = (e) => {
    //     console.log(e)
    // }
    const [text, setText] = useState("")

    return (
        // <header className={styles.header}>
        <header className="header">
            <input title="aa" placeholder={"Todoを入力"} value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                onAdd(text)
                setText("")
            }} className={"btn"}>Add
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: "Defaults Title",
}

Header.propType = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
}

// CSS in JS
// const headingStyle = {}

export default Header