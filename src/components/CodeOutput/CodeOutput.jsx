import React from 'react';
import './CodeOutput.css';

const scopeCSS = (css, prefix) => {
    return css.replace(/(^|\})\s*([^{]+)/g, (match, p1, p2) => {
        return `${p1} ${p2.split(',').map(selector => `${prefix} ${selector.trim()}`).join(', ')}`;
    });
};

const CodeOutput = ({ codeContent }) => {
    const div = document.createElement('div');
    div.innerHTML = codeContent;

    const styles = div.querySelectorAll('style');
    styles.forEach(style => {
        style.textContent = scopeCSS(style.textContent, '.coderender');
    });

    return (
        <div className='outputbox'>
            <div className='coderender' dangerouslySetInnerHTML={{ __html: div.innerHTML }} />
        </div>
    );
};

export default CodeOutput;
