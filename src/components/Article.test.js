import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen, waitFor} from '@testing-library/react';


const testArticle = {
    id:"testid",
    headline: "test headline",
    author: "test author",
    summary: "test summary",
    body: "test body"
};

const associateArticle = {
    id:"testid",
    headline: "test headline",
    author: "",
    summary: "test summary",
    body: "test body"
};

test('renders component without errors', ()=> {
    render(<Article article={[]} />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)
    
    const headline = screen.queryByText(/test headline/i);
    const author = screen.queryByText(/test author/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={associateArticle} />)

    const associates = screen.queryByText(/Associated Press/)
    
    
    
    expect(associates).toBeInTheDocument();
    
   
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();
    
    render(<Article article={testArticle} handleDelete={mockHandleDelete} />)

    const button = screen.queryAllByTestId('deleteButton')
    userEvent.click(button[0])

    expect(mockHandleDelete.mock.calls.length).toBe(1)

});

//Task List:
//1. Complete all above tests. Create test article data when needed.