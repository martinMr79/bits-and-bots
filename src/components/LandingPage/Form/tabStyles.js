import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

export const StyledTabs = withStyles({
  root: {
    width: '100%',
    marginBottom: '2rem',
    
  },
  indicator: {
    backgroundColor: '#CCFF00',
  },
})(Tabs);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 0,
    
    width: '50%',
    color: '#FFF',
    backgroundColor: '#3B3C41',
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    '&$selected': {
      color: '#CCFF00',
      backgroundColor: '#27282E',
    },
  },
  selected: {},
}))(Tab);





