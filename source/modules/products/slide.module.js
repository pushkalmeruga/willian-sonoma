function productSlides(product) {
    if (!product.name) throw new TypeError('The product needs a name');
    if (!product.hero || !product.hero.href) throw new TypeError('The product needs a hero with a link to the image');
  
    const preview = document.createElement('div');
    
    const img = document.createElement('img');
    img.setAttribute('src', product.hero.href);
    img.setAttribute('alt', product.name);
    img.setAttribute('id', 'heroId' + product.id);
    img.classList.add('img__image');
    preview.appendChild(img);

    preview.classList.add('img__container');
    preview.setAttribute('tabindex', '0');
    preview.setAttribute('aria-labelledby', 'heroId' + product.id);
  
    const hover = document.createElement('div');
    hover.classList.add('img-middle');
    hover.setAttribute('aria-labelledby', 'heroId' + product.id);
    preview.appendChild(hover);
  
    const text = document.createElement('div');
    text.classList.add('img__text');
    text.innerText = product.name;
    hover.appendChild(text);
  
    const price = document.createElement('div');
    price.classList.add('img__text-no-top-pad');
    if (product.priceRange && product.priceRange.selling) {
      price.innerText = product.priceRange.selling.low && product.priceRange.selling.high
        ? `$${product.priceRange.selling.low} - $${product.priceRange.selling.high}`
        : product.priceRange.selling.high
          ? `$${product.priceRange.selling.high}`
          : product.priceRange.selling.low
            ? `$${product.priceRange.selling.low}`
            : '$--';
    } else {
      price.innerText = product.price.selling ? `$${product.price.selling}` : `$${product.price.regular}`;
    }
    hover.appendChild(price);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerText = 'click to view the image';
    preview.appendChild(overlay);
  
    return preview;
  }
  
  export default productSlides;
  