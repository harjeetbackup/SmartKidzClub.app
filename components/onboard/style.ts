import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import v from 'styles/variables';

export default styled(StyledFirebaseAuth)`
  margin-top: ${v.size.px30};

  *[class$='--colored'] {
    background-color: ${v.color.brandRed} !important;
  }
`;
