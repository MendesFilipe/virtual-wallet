import { FC, ReactElement } from 'react';
import BaseForm from '../BaseForm';
import { FormProps } from 'react-final-form';
import { Grid, Button, makeStyles, Theme, MenuItem } from '@material-ui/core';
import NumberField from '../../fields/NumberField';
import Currencies from 'enums/Currencies';
import composeValidators from '../../fields/validation/composeValidators';
import required from '../../fields/validation/required';
import onlyPositiveNumbers from '../../fields/validation/onlyPositiveNumbers';

const useStyles = makeStyles((theme: Theme) => {
  return {
    formTitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.spacing(3),
      fontWeight: 600,
      textAlign: 'center'
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: theme.spacing(2, 0)
    },
    sellButton:{
      backgroundColor: '#64B9E3',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#1e92a9'
      }
    }
  };
});

interface CustomProps {
  currency: Currencies;
}

type SellFormProps = FormProps & CustomProps;

const SellForm: FC<SellFormProps> = ({ onSubmit, currency }): ReactElement => {
  const classes = useStyles();
  return (
    <BaseForm onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} direction="column">
              <Grid item xs={12} sm={12}>
                <NumberField
                  name="quantity"
                  label="Quantity"
                  validate={composeValidators(required, onlyPositiveNumbers)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className={classes.actions}>
              <Button
                type="submit"
                variant="contained"
                className={classes.sellButton}
                disabled={submitting}
              >
                Sell
              </Button>
            </div>
          </form>
        );
      }}
    </BaseForm>
  );
};
export default SellForm;
