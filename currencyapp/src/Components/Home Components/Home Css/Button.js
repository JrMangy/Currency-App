import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
function OutlinedButtons(props) {
  const { classes } = props;
  return (
      <Button variant="outlined" type='submit' color="secondary" className={classes.button} >
        Calculate
      </Button>
  );
}
OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OutlinedButtons);
