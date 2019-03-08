import React from "react";
import Lodash from 'lodash';

const SearchItem = props => {

  return (
    <div className="search_user_name">
        {props.user.fname} {props.user.lname}
    </div>
  );
};

export default SearchItem;
