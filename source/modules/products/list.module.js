import style from './list.style.js';
import productSlide from './slide.module.js';
import previewStyle from './slide.style.js';

function productsList(products, slideShow) {
  if (typeof slideShow.setState !== 'function') throw new TypeError('The slideShow must expose a setState function');

  const parent = document.createElement('div');

  parent.appendChild(style);
  parent.appendChild(previewStyle);
  parent.classList.add('responsive-children');

  const productInfo = document.createElement('div');
  productInfo.classList.add('wide');
  productInfo.classList.add('center-items-text');

  products.forEach((product) => {
    const item = productInfo.cloneNode(true);
    if (product.images && product.images.length) {
      item.onclick = () => slideShow.setState({ images: product.images });
    }
    item.appendChild(productSlide(product));
    return parent.appendChild(item);
  });

  return parent;
}

export default productsList;
