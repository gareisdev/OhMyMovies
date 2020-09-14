import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";
import Nav from "./components/Nav/Nav"

import "bootswatch/dist/minty/bootstrap.min.css";

const App = () => {
    return (
        <Fragment>
            <Nav/>
            <main>
                <div className='container'>
                    <List/>
                </div>
            </main>
        </Fragment>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));