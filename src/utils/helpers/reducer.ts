export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_RESTURANTS':
      return {
        ...state,
        isLoading: false,
        resturants: action.resturants,
      };
    case 'GET_CATEGORY':
      return {
        ...state,
        isLoading: false,
        category: action.category,
      };
    case 'GET_RADIUS':
      return {
        ...state,
        isLoading: false,
        radius: action.radius,
      };
  }
};
