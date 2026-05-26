import React from 'react';

const Title = function () {
	Object.assign(this, this.slides.current);
};

Title.prototype.View = function () {
	const title = this.title || '';
	const hasCyan = title.includes('Java') || title.includes('java');
	const pre = hasCyan ? 'JAVA' : title;
	const cyan = hasCyan ? 'SCRIPT' : '';

	return (
		<div className="SlideContent">
			<div className="cover">
				<div className="cover-top">
					<div className="markwrap">
						<img className="logo" src="./content/logo_codefest.svg" alt="CodeFest" />
						<div className="meta"><b>CodeFest 16</b><br/>МАЙ · 2026</div>
					</div>
					<div className="badge">@wentout</div>
				</div>
				<div className="title-wrap">
					<div className="pre-title">ДОКЛАД #00 · КТО ТАКИЕ, ЧТО ТАКОЕ</div>
					<div className="title">{pre}<em>{cyan}</em></div>
					<div className="sub">{this.subtitle}</div>
					<div className="caption">{this.caption || '\u00a0'}</div>
				</div>
				<div className="cover-foot">
					<span className="speaker"><b>Виктор Вершанский</b> · <em>Ростов-на-Дону</em> → весь интернет</span>
					<span>01 / {this.slides.count}</span>
				</div>
			</div>
		</div>
	);
};

export default Title;