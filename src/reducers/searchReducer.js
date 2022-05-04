
const searchReducer = (state = null, { type, payload }) => {
  switch (type) {
  case('SET_SEARCH'):
    return payload;
  default:
    return state;
  }
};

export const setSearch = (search) => {
  return dispatch => {
    dispatch({
      type: 'SET_SEARCH',
      payload: search.Search
    });
  };
};


export default searchReducer;