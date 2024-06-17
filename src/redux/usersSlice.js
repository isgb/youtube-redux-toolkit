const usersSlice = createSlice({
    name:"users",
    initialState: [],
    reducers:{
        fetchUsers: (state,action) => {
            return action.payload
        }
    }
});

export const {fetchUsers} = usersSlice.action;

export default usersSlice.reducer;