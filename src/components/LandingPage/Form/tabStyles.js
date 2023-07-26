import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { colors } from '../../../styles/theme';

export const StyledTabs = withStyles({
  root: {
    width: '100%',
    borderRadius: '5px 5px 0 0',
  },
  indicator: {
    backgroundColor: colors.secondary,
  },
})(Tabs);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    opacity: 1,
    minWidth: 0,
    width: '50%',
    color: '#FFF',
    backgroundColor: '#3B3C41',

    '&$selected': {
      color: colors.secondary,
      backgroundColor: colors.primary,
    },
  },
  selected: {},
}))(Tab);
