const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const myreducer = (state = initialState, action) => {
  let updated = [...state];

  switch (action.type) {
    case "ADD":
      updated = [...state, { ...action.data, quantity: 1 }];
      break;

    case "INCREMENT":
      updated = state.map((item, index) =>
        index === action.index ? { ...item, quantity: item.quantity + 1 } : item
      );
      break;

    case "DECREMENT":
      updated = state.map((item, index) =>
        index === action.index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      break;

    case "REMOVE":
      updated = state.filter((_, index) => index !== action.index);
      break;

    default:
      return state;
  }

  // Save to localStorage after every action
  localStorage.setItem('cart', JSON.stringify(updated));
  return updated;
};
