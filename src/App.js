import React from 'react'
import {Route, Switch} from "react-router-dom";
import routes from "./routes";
import './Style/style.css';
import Header from "./Header & Footer/Header/Header";
import Footer from "./Header & Footer/Footer/Footer";
function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>


            <Switch>
                {
                    routes.map(item => {
                        return <Route
                            key={item.id}
                            component={item.component}
                            path={item.path}
                            exact
                        />
                    })
                }
            </Switch>

            <Footer/>
        </div>
    </div>
  );
}

export default App;
