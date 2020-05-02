const createMenuMarkup = (menu, isChecked) => {
  const {name, count} = menu;
  if (name === `All movies`) {
    return `<a href="#all" class="main-navigation__item ${isChecked ? `main-navigation__item--active` : ``}">All movies</a>`;
  } else {
    return (`<a href="#${name.toLowerCase()}" class="main-navigation__item ${isChecked ? `main-navigation__item--active` : ``}">${name}<span class="main-navigation__item-count">${count}</span></a>`);
  }
};

export const createMenuTemplate = (menus) => {
  const menuMarkup = menus.map((it, i) => createMenuMarkup(it, i === 0)).join(`\n`);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${menuMarkup}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};
