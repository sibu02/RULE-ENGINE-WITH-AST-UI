import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { api } from '../apiConfig';
import toast from 'react-hot-toast';

const RuleForm = () => {
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = async() => {
    if (ruleString) {
      try{
        await api.post("/api/rules/create",ruleString);
        toast.success("Rule Created Successfully!")
        setRuleString("");
      }
      catch(err){
        toast.error(err.message);
      }
    }
  };

  return (
    <div className='m-4'>
    <Grid container spacing={4} className='flex justify-center'>
        <Grid item xs={12} md={8}>
            <TextField
                multiline
                rows={3}
                label="Create New Rule"
                value={ruleString}
                onChange={(e) => setRuleString(e.target.value)}
                fullWidth
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} md={8}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className="w-full"
            >
                Create Rule
            </Button>
        </Grid>
    </Grid>
</div>
  );
};

export default RuleForm;
