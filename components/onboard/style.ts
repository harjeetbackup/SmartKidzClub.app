import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import v from 'styles/variables';

export default styled(StyledFirebaseAuth)`
  margin-top: ${v.size.px30};
  font-family: ${v.font.light};

  *[class$='--colored'],
  label.firebaseui-label::after {
    background-color: ${v.color.red} !important;
  }

  h1.firebaseui-title {
    color: ${v.color.black} !important;
    font-family: ${v.font.light};
  }

  button.firebaseui-button {
    border-radius: 10px;
    text-transform: capitalize;
  }
`;
