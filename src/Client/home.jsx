import React from "react"
import { Link } from "react-router-dom"
import home from "../Server/img/home.jpg"

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="homePage">
                <div>
                    <h2>Oslo havn 1798</h2>
                    <div className="btnPart">
                        <Link to={"/game"} className={"btn"}>
                            <h2 className={"btn-text"}>start</h2>
                            </Link>
                    </div>
                </div>
            </div>
        )
    }






}

export default Home;