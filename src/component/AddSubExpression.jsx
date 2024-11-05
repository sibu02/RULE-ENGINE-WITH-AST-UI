import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { api } from '../apiConfig';
import toast from 'react-hot-toast';

const AddSubExpression = () => {
    const [rules,setRules] = useState([]);
    const [selectedRule,setSelectedRule] = useState(null);
    const [subExpression, setSubExpression] = useState("");
    const [operator, setOperator] = useState("");

    useEffect(()=>{
        const fetchRules = async () => {
            const response = await api.get("/api/rules");
              setRules(response.data);
            };
            fetchRules();
    },[])
    const handleAddSubExpression = async ()=>{
        try {
            await api.put(`/api/rules/addSubExpression?ruleId=${selectedRule.id}&newCondition=${subExpression}&operator=${operator}`);
            toast.success("successfully added subExpression")
            setSelectedRule(null);
            setOperator("");
            setSubExpression("");
          } catch (error) {
            toast.error(error.message)
          }
    }
    return (
        <div className='m-4'>
            <Grid container spacing={4} className='flex justify-center'>
            <Grid item xs={12} md={8}>
            <label className="text-lg font-semibold">Select Rule</label>
                    <Select 
                    value={selectedRule?.id || ""}
                    onChange={(e)=>setSelectedRule(rules.find(rule => rule.id === e.target.value))}
                    fullWidth
                    variant="outlined"
                    >
                        {rules.map((rule)=><MenuItem key={rule.id} value={rule.id}> {rule.ruleString|| `Rule ${rule.ruleString}`}</MenuItem>)}
                    </Select>
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        label="Add SubExpression"
                        value={subExpression}
                        onChange={(e) => setSubExpression(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                <label className="text-lg font-semibold">Select Operator</label>
                    <Select
                        value={operator}
                        onChange={(e) => setOperator(e.target.value)}
                        fullWidth
                        variant="outlined"
                        className="mb-4">
                        <MenuItem value="AND">AND</MenuItem>
                        <MenuItem value="OR">OR</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddSubExpression}
                        className="w-full"
                    >
                        Add Sub-Expression
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddSubExpression