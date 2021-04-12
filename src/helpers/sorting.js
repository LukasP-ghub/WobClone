export const sorting = (state, payload) => {

  switch (payload) {
    case 'lower-price':
      state = state.sort((a, b) => a.price - b.price);
      break;
    case 'higher-price':
      state = state.sort((a, b) => b.price - a.price);
      break;
    default:
      state = state.sort((a, b) => {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
  }
  return state;
}