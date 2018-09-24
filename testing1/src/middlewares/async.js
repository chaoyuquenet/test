export default ({ dispatch }) => next => action => {
  //Check to see if the action has a promise on its payload property
  //If it does, then wait for it to resolve
  //If it doesn't, then send the action to the next middleware
  //debugger;

  if(!action.payload || !action.payload.then) {
    return next(action);
  }

  //We wait for the promise to resolve(get the data)
  //Then create a new action with data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
