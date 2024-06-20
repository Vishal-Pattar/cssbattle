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
            // Define CSS Battle theme
            monaco.editor.defineTheme('cssBattleTheme', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'comment', foreground: '6c6783' },
                    { token: 'attribute.name', foreground: '9a86fd' },
                    { token: 'attribute.value', foreground: 'ffcc99' },
                    { token: 'string', foreground: 'ffcc99' },
                    { token: 'tag', foreground: 'e06c75' },
                    { token: 'number', foreground: 'd19a66' },

                ],
                colors: {
                    'editor.background': '#07080b'
                },
            });

            monaco.editor.setTheme('cssBattleTheme');
        }
    }, [monaco]);

    return (
        <div className='editor-box'>
            <Editor
                height='100%'
                width='100%'
                theme='cssBattleTheme'
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
