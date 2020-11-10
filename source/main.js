import ProductsList from './modules/products/list.class.js';
import SlideShow from './modules/slideShow.class.js';
import Header from './modules/header.module.js';

const slideShow = new SlideShow({
  container: 'slideshow'
});

const main = new ProductsList({
  container: 'container',
  slideShow
});

Header({
  title: 'Products Catalog',
  container: 'header'
});

fetch(
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
)
  .then(res => res.json())
  // .catch(() => fetch('./products').then(products => products.json()))
  //.catch(() => staticJSON)
  .then(products => main.setState({ products }));
