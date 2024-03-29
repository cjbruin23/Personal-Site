import { Fragment } from 'react';
import PageItemLink from '../page-item-link/page-item-link';

function PagesHome() {
  return (
    <Fragment>
      <h1>My Pages</h1>
      <PageItemLink
        title='Instagram API'
        imgSrc='./'
        description='This is a test to see if we can bring in Instagram images through an API'
        routeLink={1}
      ></PageItemLink>
    </Fragment>
  );
}

export default PagesHome;
