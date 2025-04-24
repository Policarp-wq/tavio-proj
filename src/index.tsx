import { createRoot } from 'react-dom/client';
import { App } from './app/index';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);