const menuNames = [
  {
    name: `All movies`,
    link: `all`,
  },
  {
    name: `Watchlist`,
    link: `watchlist`,
  },
  {
    name: `History`,
    link: `history`,
  },
  {
    name: `Favorites`,
    link: `favorites`,
  },
];

const generateMenus = () => {
  return menuNames.map(({name, link}) => {
    return {
      name,
      link,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateMenus};
