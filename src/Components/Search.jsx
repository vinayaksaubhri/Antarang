import React from 'react';
import { Input, Search_view } from '../../style/global';
import Search_icon from '../../assets/Svg/Search_icon';

const Search = () => {
  return (
    <Search_view>
      <Search_icon style={{ margin: '3%' }} />
      <Input placeholder="Pulses,Stapies,Spices,Oils"></Input>
    </Search_view>
  );
};

export default Search;
