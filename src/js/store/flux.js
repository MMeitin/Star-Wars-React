const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favs: [],
    },
    actions: {
      addNewFav: (fav) => {
        const store = getStore();
        setStore({ favs: [...store.favs, fav] });
      },

      removeFav: (fav) => {
        const store = getStore();
        const newFavorites = store.favs.filter((item) => item !== fav);
        setStore({ favs: newFavorites });
      },
    },
  };
};

export default getState;
