function getName(row) {
    const name = row.split('@');
    return name[0];
  }
  
  export const state = () => ({
    user: {
      name: '',
      email: ''
    },
    notes: [],
    filter: 'all',
    dataToRender: []
  });
  
  export const mutations = {
    setUser(state, payload) {
      state.user.email = payload.email;
      state.notes = payload.notes;
      state.dataToRender = payload.notes;
      state.user.name = getName(payload.email);
    },
    apllyFilter(state, payload) {
      if (payload.filter == 'all') {
        state.dataToRender = state.notes;
      } else {
        state.dataToRender = state.notes.filter(item => {
          return item.category.name == payload.filter;
        });
      }
    }
  };
  
  export const getters = {
    getNotes (state) {
      return state.dataToRender;
    },
    getName (state) {
      return state.user.name;
    },
    getEmail (state) {
      return state.user.email;
    },
    getCurrentFilter (state) {
      return state.filter;
    }
  };
  