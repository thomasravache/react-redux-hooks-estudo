const promise = new Promise((resolve, reject) => {
  resolve(1);
})

export const depositMoney = (amount) => {
  return async (dispatch) => {
    const value = await promise;
    console.log(value);
    amount = value;
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  }
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    })
  }
};
