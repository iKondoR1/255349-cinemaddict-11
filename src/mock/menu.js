const menuNames = [
  `All movies`, `Watchlist`, `History`, `Favorites`, `Action`, `Comedy`, `Thriller`
];

const generateMenu = () => {
  return menuNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 30),
    };
  });
};


export {generateMenu};
