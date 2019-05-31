import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";


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
        <div className="unityContainer">
    <Unity unityContent={this.unityContent}/> </div>
    </div>
    
    )
  }
}

export default Game;