import { useState } from 'react';

const useCodeContent = () => {
    const initialContent = `
<div></div>
<style>
    div{
        width: 100px;
        height: 100px;
        background: #dd6b4d;
    }
</style>`;

//     const initc = `<div id='box1'></div>
// <div id='box2'></div>
// <style>
//     body {
//         background: #0A6190;
//     }
//     #box1 {
//         width: 100px;
//         height: 200px;
//         background: #328FC1;
//         position: absolute;
//         top: 100px;
//         left: 100px;
//     }
//     #box2 {
//         width: 100px;
//         height: 200px;
//         background: #328FC1;
//         position: absolute;
//         top: 0px;
//         right: 0px;
//     }
// </style>`;
    const [codeContent, setCodeContent] = useState(initialContent);

    const updateCodeContent = (value) => {
        setCodeContent(value);
    };

    return [codeContent, updateCodeContent];
};

export default useCodeContent;