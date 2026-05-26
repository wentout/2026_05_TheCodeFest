import React from 'react';

const Starter = function () {
	Object.assign(this, this.slides.current);
};

Starter.prototype.View = function () {
	const {
		ProgressorView,
		FooterView,
		layout,
		title,
		author,
		subtitle,
		caption
	} = this;

	// Breath / pause slide: centered text + glyph (no footer)
	if (layout === 'breath') {
		return (
			<div className="SlideContent">
				<div className="breath">
					<div>
						<div className="text">{title}</div>
						{author && <div className="glyph">{author}</div>}
					</div>
				</div>
			</div>
		);
	}

	// Quote slide: large quote mark + body + author (no footer)
	if (layout === 'quote') {
		return (
			<div className="SlideContent">
				<div className="quote">
					<div className="mark">"</div>
					<div className="body" dangerouslySetInnerHTML={{ __html: title }} />
					{author && <div className="author">{author}</div>}
				</div>
			</div>
		);
	}

	// Default: simple title + optional subtitle/author
	return (
		<div className="SlideContent">
			<ProgressorView />
			<div>
				<h1>{title}</h1>
				{subtitle && <h2>{subtitle}</h2>}
				{author && <p>{author}</p>}
			</div>
			<FooterView />
		</div>
	);
};

export default Starter;
