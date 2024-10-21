import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextApp } from './pages/context/AppContext';
import './styles.css'

const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ContextApp />
	</React.StrictMode>
);