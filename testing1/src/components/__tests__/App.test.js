import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
  const wrapped = shallow ( <App /> );
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapped = shallow ( <App /> );
  expect(wrapped.find(CommentList).length).toEqual(1);
});


/* not better test method
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //look inside the div and check to see if the CommentBox is in there
  //use console.log(div.innerHTML); to see if the CommentBox exist
  expect(div.innerHTML).toContain('Comment Box');
  //expect(div).toHaveAnInstanceOf(CommentBox);
  ReactDOM.unmountComponentAtNode(div);
});
*/
