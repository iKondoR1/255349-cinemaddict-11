const menuNames = [
  `All movies`, `Watchlist`, `History`, `Favorites`, `Action`, `Comedy`, `Triller`
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
