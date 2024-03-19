import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
console.log(props);
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
