import React, { createContext, useEffect, useReducer } from 'react';
// ----------------------------------------------------------------------

const initialState = {
  isRegistered: false,
};

const handlers = {
  INITIALIZE: (state, action) => {
    return {
      ...state,
      isRegistered: false,
    };
  },
  SET_IS_REGISTERED: (state, action) => {
    return {
      ...state,
      isRegistered: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const ProfileContext = createContext({
  ...initialState,
  registerProfile: () => Promise.resolve(),
});

//  Provider
function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      dispatch({
        type: 'INITIALIZE',
        payload: null
      });
    };
    initialize();
  }, []);

  const registerProfile = (profileData = null) => {
    console.log('registerProfile');
    dispatch({
      type: 'SET_IS_REGISTERED',
      payload: true
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        ...state,
        registerProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
