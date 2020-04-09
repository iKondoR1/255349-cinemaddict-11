const createMenuMarkup = (name, count) => {
	const link = name.toLowerCase();
  return(
  <a href="#${link}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${count}</span></a>
  )
}





const createMenuTemplate = () => {
	const menuMarkup = createMenuMarkup();
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${menuMarkup}
      ${menuMarkup}
      ${menuMarkup}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

export {createMenuTemplate};
