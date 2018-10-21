import "./src/style/index.scss";
import React from "react";
import { render } from "react-dom";

// const App = () => (
//     <div>
//         <h1>Welcome to React App!</h1>
//     </div>
// )
class App extends React.Component {
    state = {
        isActive: false
    }
    handleBtn = () => {
        this.setState({isActive:!this.state.isActive})
    }
  render() {
    return (
      <div>
          <h1>Welcome to React App - class based!</h1>
          {
              this.state.isActive ? <h1>I am active!</h1>
              : <h1>Not active!</h1>
          }
        
        <button onClick={this.handleBtn}>click me!</button>
      </div>
    );
  }
}
render(<App />, document.getElementById("appRoot"));
