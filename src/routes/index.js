import React from 'react';
import { Route, Switch } from "react-router-dom";
import Board from "../view/Board/MainBoard"

const MainRouter = () =>  {

    return(
        <React.Fragment>
          <Switch>
            <Route path="/" component={Board}/>
          </Switch>
        </React.Fragment>
    )
};


export default MainRouter;
