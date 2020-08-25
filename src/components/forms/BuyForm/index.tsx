import { FC, ReactElement } from 'react';
import BaseForm from '../BaseForm';
import { FormProps } from 'react-final-form';
import { Grid, Button, makeStyles, Theme, MenuItem } from '@material-ui/core';
import NumberField from '../../fields/NumberField';
import SelectField from '../../fields/SelectField';
import Currencies from '../../../enums/Currencies';
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
    }
  };
});

interface CustomProps {
  currency: Currencies;
}

type BuyFormProps = FormProps & CustomProps;

const BuyForm: FC<BuyFormProps> = ({ onSubmit, currency }): ReactElement => {
  const { REAL, BITCOIN, BRITA } = Currencies;
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
              <Grid item xs={12} sm={12}>
                <SelectField
                  name="withCurrency"
                  label="With"
                  fullWidth
                  defaultValue={'0'}
                >
                  <MenuItem value={REAL}>Real</MenuItem>
                  {currency !== BITCOIN && (
                    <MenuItem value={BITCOIN}>Bitcoin</MenuItem>
                  )}
                  {currency !== BRITA && (
                    <MenuItem value={BRITA}>Brita</MenuItem>
                  )}
                </SelectField>
              </Grid>
            </Grid>
            <div className={classes.actions}>
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                disabled={submitting}
              >
                Buy
              </Button>
            </div>
          </form>
        );
      }}
    </BaseForm>
  );
};
export default BuyForm;
