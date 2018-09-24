import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', (done) => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' } ]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // Attempt to render the *entier* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchCommnts' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Introduce a Pause before expect to find a list of comments
  wrapped.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});

/* Same as above wrapped.wait function
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  }, 100);
});
*/
