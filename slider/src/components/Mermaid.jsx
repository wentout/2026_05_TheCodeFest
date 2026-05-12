import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

let initialized = false;

const Mermaid = ({ children }) => {
	const containerRef = useRef(null);
	const [svg, setSvg] = useState('');

	useEffect(() => {
		if (!initialized) {
			mermaid.initialize({
				startOnLoad: false,
				theme: 'dark',
				themeVariables: {
					primaryColor: '#0B1A3D',
					primaryTextColor: '#FFFFFF',
					primaryBorderColor: '#A8D0E6',
					lineColor: '#A8D0E6',
					secondaryColor: '#1a2d5c',
					tertiaryColor: '#0B1A3D',
					fontFamily: 'var(--font-sans)',
					fontSize: '22px'
				}
			});
			initialized = true;
		}

		const source = typeof children === 'string' ? children.trim() : '';
		if (!source) return;

		const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
		mermaid.render(id, source)
			.then(({ svg: renderedSvg }) => {
				setSvg(renderedSvg);
			})
			.catch((err) => {
				console.error('Mermaid render error:', err);
				setSvg(`<pre class="mermaid-error">${err.message}</pre>`);
			});
	}, [children]);

	return (
		<div
			ref={containerRef}
			className="Mermaid"
			dangerouslySetInnerHTML={{ __html: svg }}
			style={{ display: 'flex', justifyContent: 'center' }}
		/>
	);
};

export default Mermaid;
