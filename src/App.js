import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
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
  const clearForm = () => {
    setAge(null);
    setName(null);
    setGender(null);
  }

  const [loading, setLoading] = useState(false);

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
    // form submission
    setLoading(true);
    dispatch(updateForm({
      name: null,
      age: null,
      gender: null
    }))
    clearForm();
    setTimeout(() => setLoading(false), 3000);
    // usedispatch
  }

  return (
    <Box sx={{ maxWidth: 350, padding: '1rem', backgroundColor: 'palette.background.secondary' }}>
      {
        loading ? <CircularProgress size={36} /> : <Box>
          <ElementWrap>
            <TextField label='Name' id='name' value={name} onChange={(e) => changeHandler('NAME', e)} />
          </ElementWrap>
          <ElementWrap sx={{ width: '100%' }}>
            <FormControl>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                value={gender || 'MALE'}
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
            <Button onClick={handleSubmission}>Submit Form</Button>
          </ElementWrap>
        </Box>
      }
    </Box>
  );
}

export default App;
