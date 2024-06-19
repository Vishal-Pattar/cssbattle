import React from 'react';
import MonacoEditor from './components/MonacoEditor/MonacoEditor';
import CodeOutput from './components/CodeOutput/CodeOutput';
import useCodeContent from './hooks/useCodeContent';

const App = () => {
    const [codeContent, updateCodeContent] = useCodeContent();
    return (
        <div className="app">
            <MonacoEditor codeContent={codeContent} updateCodeContent={updateCodeContent} />
            <CodeOutput codeContent={codeContent} />
        </div>
    );
};

export default App;