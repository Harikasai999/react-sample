import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE:true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch value="checkedC" inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled value="checkedD" inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked value="checkedE" inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <div>
      <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedC} onChange={handleChange('checkedC')} value="checkedC" />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedD}
            onChange={handleChange('checkedD')}
            value="checkedD"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
    </FormGroup>
      </div>
    </div>
  );
}
