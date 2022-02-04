import React, { useState, createContext } from "react";

export const MainContext = createContext();

const StoreProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  return (
    <React.Fragment>
      <MainContext.Provider
        value={{
          blogs,
          setBlogs,
        }}
      >
        {props.children}
      </MainContext.Provider>
    </React.Fragment>
  );
};
export default StoreProvider;
