import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';
import Home from 'components/home-page/Home';
import Boards from 'components/boards-page/Boards';
import Profile from 'components/profile-page/Profile'
import Header from 'components/header/Header';
import ModalPortal from './components/modals/ModalPortal';
import SingleBoard from './components/single-board-page/SingleBoard';
import FloatedPopupPortal from 'components/floated-popup-system/FloatedPopupPortal';

import "./styles/baseline.scss";
import 'react-datepicker/dist/react-datepicker.css';

// if (process.env.NODE_ENV !== 'production') {
//     const { whyDidYouUpdate } = require('why-did-you-update');
//     whyDidYouUpdate(React, { exclude: [/^StyledComponent/]});
// }

//you can use this to manually call dispatch and getState but instead passing it off to provider, letting react-redux handle things.
const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ModalPortal />
                <FloatedPopupPortal />
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/boards" exact component={Boards} />
                <Route path="/profile" component={Profile} />
                <Route path='/b/:id' component={SingleBoard} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);

