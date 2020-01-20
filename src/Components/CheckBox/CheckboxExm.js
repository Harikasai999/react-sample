
import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
var items = [
    {
        name:"Banana",
        checked:false
    },
    {
        name:"Mango",
        checked:false
    },
    {
        name:"Grapes",
        checked:false
    },
    {
        name:"Strawberry",
        checked:false
    }
]
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    checked: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
  }));
  
export default function CheckboxExm() {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();
  const [checking, setChecking]=useState(false)
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  function onValueChange(res) {
   
    res.checked = !res.checked
    console.log("najkdhooooo",res)
    setChecking(!checking)
  };
  const handleChange1 = event => {
    setChecked(event.target.checked);
  };
  const handleChange = name => event => {
      console.log("najkdhooooo",event.target.value)
    setState({ ...state, [name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;
//   function onValueChange(event){
//     console.log("najkdhooooo",event.target.value)
//   }
  return (
    <div style={{ justifyContent:'center'}}>
      <Checkbox
        checked={checked}
        onChange={handleChange1}
        value="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled value="disabled" inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox
        disabled
        checked
        value="disabled checked"
        inputProps={{ 'aria-label': 'disabled checked checkbox' }}
      />
      <Checkbox
        defaultChecked
        value="indeterminate"
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        value="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
         <div className={classes.root}>
      {/* <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl> */}
      {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={true} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={true} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl> */}
       <FormControl required error={error} component="fieldset" className={classes.formControl}>
   
        <FormGroup>
            {items.map((res, key)=>{
                return(
                    <FormControlLabel
                    control={
                        <Checkbox
                        className={classes.checked}
                        disableRipple
                        color="default"
                        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                        icon={<span className={classes.icon} />}
                        inputProps={{ 'aria-label': 'decorative checkbox' }}
                        onChange={()=>onValueChange(res)}
                      />
                    }
                    label={res.name}
                  />
                   
                //     <FormControlLabel
                //     color="primary"
                //     control={<Checkbox checked={res.checked} onChange={()=>onValueChange(res)} value={res.name}/>}
                //     label={res.name}
                //   />
                 
                )
            })}
         
        </FormGroup>
      
      </FormControl>
    </div>
    </div>
  );
}