const menuNames = [
  `All movies`, `Watchlist`, `Favorites`, `Already watched`
];

const generateMenu = () => {
  return menuNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 8),
    };
  });
};


export {generateMenu};
