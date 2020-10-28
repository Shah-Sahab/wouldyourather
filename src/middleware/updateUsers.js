const updateUsers = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action', action);
        const returnValue = next(action);
        // console.log('New State', store.getState());
        console.log('Next Action', returnValue);
    console.groupEnd();
    return returnValue;
}

export default updateUsers;