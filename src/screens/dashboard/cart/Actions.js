export const ADDTOCART = 'ADDTOCART';

export const AddToCart = (item, count) => {
  return async dispatch => {
    dispatch({
      type: ADDTOCART,
      payload: {item, count},
    });
  };
};
