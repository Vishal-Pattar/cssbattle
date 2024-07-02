import React, { useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import './MonacoEditor.css';

const MonacoEditor = ({ codeContent, updateCodeContent }) => {
    const [charCount, setCharCount] = useState(codeContent.length);
    const monacoInstance = useMonaco();

    const handleEditorChange = (value) => {
        updateCodeContent(value);
        setCharCount(value.length);
    };

    useEffect(() => {
        if (monacoInstance) {
            monacoInstance.languages.html.htmlDefaults.setOptions({
                suggestions: false,
            });
            // Define CSS Battle theme
            monacoInstance.editor.defineTheme('cssBattleTheme', {
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
                    'editor.background': '#07080b',
                },
            });

            monacoInstance.editor.setTheme('cssBattleTheme');
        }
    }, [monacoInstance]);

    return (
        <div className="editor-container">
            <div className="editor-header">
                <span>Editor</span>
                <span>{charCount} characters</span>
            </div>
            <div className="editor-content">
                <Editor
                    height="100%"
                    width="100%"
                    theme="cssBattleTheme"
                    defaultLanguage="html"
                    value={codeContent}
                    onChange={handleEditorChange}
                    options={{
                        minimap: { enabled: false },
                        quickSuggestions: false,
                        acceptSuggestionOnEnter: 'off',
                        suggestOnTriggerCharacters: false,
                        tabCompletion: 'off',
                        wordBasedSuggestions: false,
                        fontSize: '20px',
                    }}
                />
            </div>
        </div>
    );
};

export default MonacoEditor;