// Tab(탭)

import { Box, CSSObject, styled, Tab, Tabs, Theme } from '@mui/material';

interface ICustomTabContentProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: CSSObject;
}
const CustomTabContent = (props: ICustomTabContentProps) => {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`siple-tabpanel${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
    >
      {props.value === props.index && (
        <Box sx={{ p: 3, ...props.sx }}>{props.children}</Box>
      )}
    </div>
  );
};

export const CustomTabs = styled(Tabs)((props: { theme: Theme }) => {
  return {
    borderBottom: `1px solid ${props.theme.palette.grey[100]}`,
  };
});

export const CustomTab = styled(Tab)(() => {
  return {
    '&.MuiButtonBase-root': {
      fontSize: '15px !important',
    },
  };
});

export const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default CustomTabContent;
