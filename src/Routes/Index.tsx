import React, { Fragment } from "react"
import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Otro1 from "../others/Index";
import Home from "../components/Home/Home";




const Root = ({ refetch, session }) => (

    
	<Router>
	  <Fragment>
		<Switch>
			<Route path="/" exact component={Home} />

			<Redirect to='/Others' component={Otro1} />
		</Switch>
		</Fragment>
	</Router>

)




export default function Routes() {

	return (
		<Fragment>
            
		<Root/>
		</Fragment>
)

}
