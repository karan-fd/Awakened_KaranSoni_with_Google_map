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
    case 'GET_CURRENT_RESTURANT':
      return {
        ...state,
        curr: action.curr,
      };
    case 'GET_DISTANCE':
      return {
        ...state,
        dis: action.dis,
      };
  }
};
