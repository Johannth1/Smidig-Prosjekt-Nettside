import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { Link } from "react-router-dom"


export class Game extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.
    // Reduce loadtimes by using the server https://docs.unity3d.com/Manual/webgl-deploying.html 
    this.unityContent = new UnityContent(
      "build/build.json",
      "build/UnityLoader.js"
    );
  }

  render() {
    // Finally render the Unity component and pass 
    // the Unity content through the props.

    return (
      <div id="gamePage">
        <div id="unityContainer">
    <Unity unityContent={this.unityContent}/> </div>
    <Link to={"/"} className={"btn"}> 
    <h2 className={"btn-text"}>Returner til start siden</h2>
    </Link>
    </div>
    
    )
  }
}