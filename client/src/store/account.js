//Creating reducers
import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "Account",
  initialState: { value: { account: "test" } },
  reducers: {
    //State param holds the previous 'state' in this case its initial state
    login: (state, action) => {
      //State.value is the current / previous state
      //Action.payload is what the 'login' recieves aka the new data
      state.value = action.payload;
    },
  },
});

export const { login } = accountSlice.actions;
export default accountSlice.reducer;

/*
useSelector takes in a function and returns the value
  - Example: const user = useSelector((state) => state.user.value)
  - now, user will have the global redux state inside of it

useDispatch: used to modify state
  - Example: const dispatch = useDispatch();
    - dispatch(login(action.payload))
      - IMPORTANT: whatever we pass into login, will become the action.payload and inside of our login function, we reassign the old state with action.payload!

*/
