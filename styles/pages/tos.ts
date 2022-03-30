import styled from 'styled-components';
import v from 'styles/variables';

export const Heading = styled.h1`
  color: ${v.color.blue};
  width: 100%;
  font-family: 'RobotoCondensedRegular';
  font-size: 32px;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-weight: normal;
  text-align: center;
`;

export default styled.div`
  padding: ${v.size.px20};

  img {
    float: right;
    margin: 0 0 4% 4%;
    max-width: 100%;
    max-height: 350px;
  }

  p {
    font-size: 15px;
    font-family: 'RobotoRegular';
    line-height: 20px;
    color: #585858;
    margin-bottom: 15px;
    vertical-align: top;
  }

  ol li, ul li{
    font-size: 15px;
  }
  
  div.terms {
    margin-bottom: 40px;

    .qu-red,
    .qu-blu {
      font-family: 'RobotoCondensedRegular';
      font-size: 25px;
      color: #dc0145;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .qu-blu {
      color: #2478dc;
    }
  }
`;
