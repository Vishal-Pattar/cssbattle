import React, { useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import './MonacoEditor.css';

const MonacoEditor = ({ codeContent, updateCodeContent }) => {
    const monaco = useMonaco();
    useEffect(() => {
        if (monaco) {
            monaco.languages.html.htmlDefaults.setOptions({
                suggestions: false,
            });
        }
    }, [monaco]);

    return (
        <div className='editor-box'>
            <Editor
                height='90vh'
                width='100%'
                defaultLanguage="html"
                value={codeContent}
                onChange={(value) => updateCodeContent(value)}
                options={{
                    minimap: { enabled: false },
                    quickSuggestions: false,
                    acceptSuggestionOnEnter: 'off',
                    suggestOnTriggerCharacters: false,
                    tabCompletion: 'off',
                    wordBasedSuggestions: false,
                }}
            />
        </div>
    );
};

export default MonacoEditor;