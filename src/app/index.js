import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

//PageContainers
import App from './containers/App';

const store = configureStore();

React.render(
	<Provider store={store}>
		{() => 
			<App/>
		}
	</Provider>,
	document.getElementById('app')
)
