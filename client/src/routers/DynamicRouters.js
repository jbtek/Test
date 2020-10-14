import React,{Suspense, lazy} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
/**
 * difference between router component pros and reder pros:
 * component prop: component create new instance of the component and it will go through the
 * lifecycle constructor, componentWillmount, componentDidMount.
 * So if we goto next and prev it will mounted, unmounted and again mounted.
 * Ex:<Route path="/:locale/store">
        <Store /> //calling as new component.
    </Route>

 * render prop: it will call as function and it did not create any new instances
 * of component. if component instance already created then it will just return that
 * comopnent. EX.
 * <Route path="/:locale/store">
    {Store()}//calling as function
    </Route>
 */
const DynamicRouters = () => {
    const Home = lazy(() => import('../containers/Home'));
    const LiveChart = lazy(() => import('../containers/LiveChart'));
    const PageNotFound = lazy(() => import('../components/PageNotFound'));
    const routes =
    <div className='router-container'> 
    <ul>
        <li>
            <Link to='/'>Home/Overview</Link>
        </li>
        <li>
            <Link to='/livechart'>Live Chart</Link>
        </li>
    </ul>
    <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/livechart' component={LiveChart}/>
        <Route component={PageNotFound}/>
    </Switch>
    </Suspense>
    </ErrorBoundary>
    
    </div>
    return(routes)
}

export default DynamicRouters