import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';



test("renders zero articles without errors", async () => {
    <View articles={[]} />

    const articles = screen.queryByTestId('article');

    expect(articles).toBeNull();
});

//I'm not sure what I'm supposed to be mocking or how to.

// test("renders three articles without errors", async ()=> {
//     render(<View articles={[
//         {
//             id:"testid",
//             headline: "test headline",
//             author: "test author",
//             summary: "test summary",
//             body: "test body"
//         }, 
//         {
//             id:"testid",
//             headline: "test headline",
//             author: "test author",
//             summary: "test summary",
//             body: "test body"
//         }, 
//         {
//             id:"testid",
//             headline: "test headline",
//             author: "test author",
//             summary: "test summary",
//             body: "test body"
//         }, 
//     ]} />)

//     await waitFor(() => {
//         const articles = screen.queryAllByTestId('article');
//         expect(articles).toHaveLength(3);
//     })    
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.