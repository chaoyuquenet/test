import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => next => action => {
  //Pass action to next middleware till reducers for update redux state
  next(action);

  //Validation logic and send warning when state is invalid
  console.log(tv4.validate(getState(), stateSchema));
  
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
