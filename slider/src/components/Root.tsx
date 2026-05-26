import React from 'react';
import { ThemeUIProvider } from 'theme-ui';

const cfTheme = {
	colors : {
		text       : '#FFFFFF',
		background : '#001C3B',
		primary    : '#33A3DC',
		secondary  : '#FF3179',
		muted      : '#6C8AAB',
		highlight  : '#FF3179',
	},
	fonts : {
		body      : '\'Geologica\', \'Inter\', system-ui, sans-serif',
		heading   : '\'Montserrat\', \'Inter\', system-ui, sans-serif',
		monospace : '\'JetBrains Mono\', \'Roboto Mono\', ui-monospace, monospace',
	},
};

const Root = function () {
	 
	const app = this;
	
	const {
		slides,
		counters
	} = app;
	
	const {
		current,
	} = slides;
	
	const {
		view
	} = current;
	
	const slide = new app[ view ]();
	this.SlideView = slide.View;
	
	this.footer = new slide.Footer(counters);
	this.FooterView = this.footer.View;

};

Root.prototype.View = function () {
	
	const {
		SlideView
	} = this;
	
	
	this.reactRoot.render(
		<React.StrictMode>
			<ThemeUIProvider theme={cfTheme}>
				<div className="Slide" >
					<SlideView />
				</div>
			</ThemeUIProvider>
		</React.StrictMode>,
	);

};

export default Root;