import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page='http://www.facebook.com'>Facebook</Link>
  );

  // test the initial snapshot
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback for a new component state
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger again for each other state
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
