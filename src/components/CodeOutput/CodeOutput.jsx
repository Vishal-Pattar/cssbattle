import React from 'react';
import './CodeOutput.css';

const scopeCSS = (css, parentClass, childClass) => {
    return css.replace(/(^|\})\s*([^{]+)/g, (match, p1, p2) => {
        const scopedSelectors = p2.split(',').map(selector => {
            selector = selector.trim();
            if (selector === 'body') {
                return parentClass;
            }
            return `${parentClass} ${childClass} ${selector}`;
        }).join(', ');
        return `${p1} ${scopedSelectors}`;
    });
};

const CodeOutput = ({ codeContent }) => {
    const div = document.createElement('div');
    div.innerHTML = codeContent;

    const styles = div.querySelectorAll('style');
    styles.forEach(style => {
        style.textContent = scopeCSS(style.textContent, '.coderender', '.renderhere');
    });

    return (
        <div className='outputbox'>
            <div className='coderender'>
                <div className='renderhere' dangerouslySetInnerHTML={{ __html: div.innerHTML }} />
            </div>
        </div>
    );
};

export default CodeOutput;