import React from 'react';

import {NICK_TITLE} from '../config';

const Footer = function ({count, index, level, among}) {
	this.count = `${ count - 1 }`;
	this.index = `${ index - 1 }`.padStart(count.length, '0');
	this.level = `${ level }`;
	this.among = `${ among }`;
	this.pager = ((among > 1) ? `${ this.index }.${ this.level }` : `${ this.index }`).padEnd(4, '.');

};

Footer.prototype.View = function () {
	const app = this;
	return (
		<div className="footer" onClick={app.clickNext}>
			<span className="speaker"> · <em>@wentout</em> · </span>
			<span className="pageno">{this.pager} <em>/</em> {this.count}</span>
		</div>
	);
};


export default Footer;
