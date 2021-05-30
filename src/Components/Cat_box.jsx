import React from 'react';
import { Box, Title } from '../../style/Catergory';

const Cat_Box = ({ Title_Name, Icon_name }) => {
  return (
    <Box>
      {Icon_name}
      <Title>{Title_Name}</Title>
    </Box>
  );
};

export default Cat_Box;
