'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { App } from 'containers';

export default function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App} >
                <IndexRoute component={App} />
                {/* <Route path="app" component={Layout1} />
                <Route path="app2" component={Layout2} />
                <Route path='*' component={Error404} /> */}
            </Route>
        </Router>
    );
}
