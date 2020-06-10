import {Images} from './images';

const Categories = [
  {id: 1, name: 'Apparel', icon: Images.apparel},
  {id: 2, name: 'Beauty', icon: Images.beauty},
  {id: 3, name: 'Shoes', icon: Images.shoes},
  {id: 4, name: 'Electronics', icon: Images.Electronics},
  {id: 7, name: 'Furniture', icon: Images.furniture},
  {id: 5, name: 'Home', icon: Images.home},
  {id: 6, name: 'Stationary', icon: Images.stationary},
];

const Mens = [
  {name: 'T-shirts'},
  {name: 'Shirts'},
  {name: 'Pants & Jeans'},
  {name: 'Socks & Ties'},
  {name: 'Underwear'},
  {name: 'Jackets'},
  {name: 'Coats'},
  {name: 'Sweaters'},
];

const Womens = [
  {name: 'Officewear'},
  {name: 'Blouse & T-Shirts'},
  {name: 'Pants & Jeans'},
  {name: 'Dresses'},
  {name: 'Lingerie'},
  {name: 'Jackets'},
  {name: 'Coats'},
  {name: 'Sweaters'},
];

const SliderImages = [
  {id: 1, title: 'For all your summer clothing needs', icon: Images.slider1},
  {id: 2, title: 'For all your summer clothing needs', icon: Images.slider2},
];

const Items = [
  {id: 1, title: 'Ankle Boots', price: 1, icon: Images.boot, code: 1},
  {id: 2, title: 'Backpack', price: 1, icon: Images.bag, code: 2},
  {id: 43, title: 'Red Scart', price: 2, icon: Images.scarf, code: 3},
  {id: 5, title: 'Ankle Boots', price: 1, icon: Images.boot, code: 1},
  {id: 6, title: 'Backpack', price: 1, icon: Images.bag, code: 2},
  {id: 7, title: 'Red Scart', price: 2, icon: Images.scarf, code: 3},
];

export {Categories, Mens, Womens, SliderImages, Items};
