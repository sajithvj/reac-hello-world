import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import 'bootstrap';
import 'bootstrap/less/bootstrap.less';
import style from './style.less';

const render = (Component) => {
  ReactDOM.render(
      <Layout/>
   ,
   document.getElementById('app')
  );
};

render(Layout);

if (module.hot) {
  module.hot.accept('./layout', () => {
    render(Layout)
  });
}
