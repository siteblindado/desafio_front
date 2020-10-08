import styled from 'styled-components';

import { Button, FormControl, TextField } from '@material-ui/core';

import ImageBackgroundPortalSite from '../../../assets/images/back-portal-site.png';

export const Wrapper = styled.div`
  background-image: url(${ImageBackgroundPortalSite});
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  form {
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 280px;
    padding: 20px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    a {
      color: #357623;
      font-weight: bold;

      &:hover {
        color: #74b61b;
      }
    }
  }

  small {
    color: white;
    margin: 10px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 10px 0 !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0 !important;
`;

export const StyledButton = styled(Button)`
  background-color: #74b61b !important;
  margin: 10px 0 !important;
  width: 100%;
`;
