import React from 'react';
import { useParams } from 'react-router-dom';
import MonacoEditor from '../MonacoEditor/MonacoEditor';
import CodeOutput from '../CodeOutput/CodeOutput';
import useCodeContent from '../../hooks/useCodeContent';
import ActualTarget from '../ActualTarget/ActualTarget';
import BottomRow from '../BottomRow/BottomRow';
import TopRow from '../TopRow/TopRow';
import './AppContent.css';

const AppContent = () => {
    const { id } = useParams();
    const [codeContent, updateCodeContent] = useCodeContent();
    return (
        <>
            <TopRow />
            <div className="app">
                <MonacoEditor codeContent={codeContent} updateCodeContent={updateCodeContent} />
                <CodeOutput codeContent={codeContent} />
                <ActualTarget id={id} />
            </div>
            <BottomRow id={id} codeContent={codeContent} />
        </>
    )
};

export default AppContent;