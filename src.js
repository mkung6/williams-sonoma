function initialize() {
  displayProducts();
  displayStorage();
}

function displayProducts() {
  for(var i = 0; i < PRODUCTS.groups.length; i++) {
    var product = PRODUCTS.groups[i];
    var price = getPriceRange(product);
    document.getElementsByClassName("wrapper")[0].innerHTML +=
      '<div class="grid-item">'
        + '<a href="#" onclick=storeProduct("' + product.id + '"); class="click">'
          + '<img src="' + product.thumbnail.href + '" class="thumbnail" alt="' + product.name + '">'
          + '<br />'
          + product.name
        + '<a>'
        + '<div class="price">'
          + price
        + '</div>'
      + '</div>';
  }
}

function getPriceRange(product) {
  if(product.hasOwnProperty('priceRange')) {
    return '$' + product.priceRange.selling.low + ' - ' + product.priceRange.selling.high;
  }
  if(product.hasOwnProperty('price')) {
    return '$' + product.price.selling;
  }
  return '';
}

function displayStorage() {
  var node = document.getElementsByClassName("storedProducts")[0];
  node.innerHTML = '';
  for(var key in localStorage) {
    var product = findProduct(key);
    if(product != null) {
      var count = localStorage.getItem(key);
      for(var i = 0; i < count; i++) {
        node.innerHTML +=
        '<img src="' + product.thumbnail.href + '" class="thumbnail" alt="' + product.name + '">'
        + '<br />'
        + product.name
        + '<br />'
        + '<a href="#" onclick=removeStoredProduct("' + key + '"); class="click">'
        + 'Remove Product'
        + '</a>'
        + '<br />';
      }
    }
  }
}

function findProduct(productId) {
  for(var i = 0; i < PRODUCTS.groups.length; i++) {
    if(PRODUCTS.groups[i].id === productId) {
      return PRODUCTS.groups[i];
    }
  }
  return null;
}

function removeStoredProduct(productId) {
  var count = (productId in localStorage) ? parseInt(localStorage.getItem(productId)) - 1 : 0;
  (count == 0) ? localStorage.removeItem(productId) : localStorage.setItem(productId, count);
  displayStorage();
}

function storeProduct(productId) {
  var count = (productId in localStorage) ? parseInt(localStorage.getItem(productId)) + 1 : 1;
  localStorage.setItem(productId, count);
  displayStorage();
}
