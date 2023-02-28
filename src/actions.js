export const ADD_DISH = "ADD_DISH";
export const DELETE_DISH = "DELETE_DISH";
export const CLEAN_CART = "CLEAN_CART";


export const addDish = (newPost) => {
    return { type: ADD_DISH, payload: newPost };
};

export const deleteDish = (id) => {
    return { type: DELETE_DISH, payload: id };
};

export const cleanCart = (payload) => {
    return { type: CLEAN_CART, payload };
};