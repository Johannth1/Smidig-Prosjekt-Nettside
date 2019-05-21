import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "webgl/WebGL-test.json",
      "webgl/UnityLoader.js"
    );
  }

  render() {

    <div className="btnPart">
    <Link to={"/home"} className={"btn"}>
        Home
        </Link>
</div>
    // Finally render the Unity component and pass 
    // the Unity content through the props.

    return <Unity unityContent={this.unityContent} />;
  }
}