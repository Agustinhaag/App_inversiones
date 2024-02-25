export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANS":
      return {
        transactions: [...state.transactions, action.payload],
      };
    case 'DELETE_TRANS':
      return{
        ...state,
        transactions: state.transactions.filter((item)=>{
           return item.id !== action.payload
        })
      }
    default:
      return state;
  }
};
