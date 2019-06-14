import React from "react";


const placeholderContainerStyle = {
    paddingTop: "100px",
}

export class Placeholder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={placeholderContainerStyle}>
               <h1>temporary placeholder</h1>
            </div>


        );
    }
}

export default Placeholder;
