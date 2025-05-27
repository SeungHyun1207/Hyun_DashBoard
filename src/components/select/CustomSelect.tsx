// Custom Select

import { CSSObject, Select, SelectProps, styled, Theme } from '@mui/material';
import { ReactNode } from 'react';

interface ICustomSelectProps extends SelectProps {
  children?: ReactNode;
  sx?: CSSObject;
}

const CustomMuiSelect = styled(Select)(
  (props: { theme: Theme; sx?: CSSObject }) => {
    return {
      display: 'flex',
    };
  }
);

export default CustomMuiSelect;
