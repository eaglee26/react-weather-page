import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HOME_ROUTE } from '../../constants/routes';
import searchContainer from '../searchContainer';

import { Container } from './styled';

function Root() {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path={HOME_ROUTE} component={searchContainer} />
                </Switch>
            </Router>
        </Container>
    );
}

export default Root;
