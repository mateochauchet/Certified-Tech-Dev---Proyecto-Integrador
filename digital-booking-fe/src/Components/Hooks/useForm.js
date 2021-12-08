import { useEffect, useState, useRef } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const isSubmitting = useRef(false);

  const [selectedFields, setSelectedFields] = useState([]);


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    isSubmitting.current=true;
    let allSelected  = [];
    for ( let i =0; i<event.target.length; i++){
      allSelected.push(event.target[i].name);
    }
    setSelectedFields(allSelected);
    setErrors(validate(values));
    
    if(Object.keys(errors).length===0){
      callback();
    }
  };

  
  useEffect(()=>{
    setErrors(validate(values))
  }, [values,validate])


  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    isSubmitting.current = false;
    setValues((prevValue)=>({...prevValue, [name]:value}));
    setSelectedFields((prevSelected)=>[...prevSelected, name])
  };

  return {
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    selectedFields,
    errors
  }
};

export default useForm;