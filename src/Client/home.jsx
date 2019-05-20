import React from "react"
import { Link } from "react-router-dom"

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Oslo havn 1798</h2>
                    <div className="btnPart">
                        <Link to={"/game"} className={"btn"}>
                            start
                            </Link>
                    </div>
                </div>
            </div>
        )
    }






}