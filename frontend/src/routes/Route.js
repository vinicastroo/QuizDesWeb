import React from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  let token = document.cookie.split('token=')[1];

  let signed = token ? true : false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
