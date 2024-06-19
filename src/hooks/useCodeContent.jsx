import { useState } from 'react';

const useCodeContent = () => {
    const initialContent = `
<div id='box1'></div>
<style>
    #box1{
        width: 100px;
        height: 100px;
        background: #dd6b4d;
    }
</style>`;
    const [codeContent, setCodeContent] = useState(initialContent);

    const updateCodeContent = (value) => {
        setCodeContent(value);
    };

    return [codeContent, updateCodeContent];
};

export default useCodeContent;