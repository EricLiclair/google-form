import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from './redux/actions';


const ElementWrap = ({ children, ...props }) => {
  return <Box sx={{ padding: '1rem' }}>
    {children}
  </Box>
}

function App() {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  const [name, setName] = useState(form.name);
  const [age, setAge] = useState(form.age);
  const [gender, setGender] = useState(form.gender);


  const changeHandler = (type, e) => {
    // form submission handler
    switch (type) {
      case 'NAME':
        dispatch(updateForm({
          name: e.target.value
        }));
        setName(e.target.value);
        break;
      case 'GENDER':
        dispatch(updateForm({
          gender: e.target.value
        }));
        setGender(e.target.value);
        break;
      case 'AGE':
        dispatch(updateForm({
          age: e.target.value
        }));
        setAge(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleSubmission = () => {

  }

  return (
    <Box sx={{ maxWidth: 350, padding: '1rem', backgroundColor: 'palette.background.secondary' }}>
      <ElementWrap>
        <TextField label='Name' id='name' value={name} onChange={(e) => changeHandler('NAME', e)} />
      </ElementWrap>
      <ElementWrap>
        <FormControl>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            id="gender"
            value={gender}
            label="Gender"
            onChange={(e) => changeHandler('GENDER', e)}
          >
            <MenuItem value={'MALE'}>Male</MenuItem>
            <MenuItem value={'FEMALE'}>Female</MenuItem>
          </Select>
        </FormControl>
      </ElementWrap>
      <ElementWrap>
        <TextField value={age} type={'number'} label='Age' id='age' onChange={(e) => changeHandler('AGE', e)} />
      </ElementWrap>
      <ElementWrap>
        <Button onClick={(clickHandler) => { }}>Submit Form</Button>
      </ElementWrap>
    </Box>
  );
}

export default App;