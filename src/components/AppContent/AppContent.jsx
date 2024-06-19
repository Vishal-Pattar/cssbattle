import React from 'react';
import { useParams } from 'react-router-dom';
import MonacoEditor from '../MonacoEditor/MonacoEditor';
import CodeOutput from '../CodeOutput/CodeOutput';
import useCodeContent from '../../hooks/useCodeContent';
import ActualTarget from '../ActualTarget/ActualTarget';
import './AppContent.css'

const AppContent = () => {
    const { id } = useParams();
    const [codeContent, updateCodeContent] = useCodeContent();

    return (
        <div className="app">
            <MonacoEditor codeContent={codeContent} updateCodeContent={updateCodeContent} />
            <CodeOutput codeContent={codeContent} />
            <ActualTarget id={id} />
        </div>
    );
};

export default AppContent;
