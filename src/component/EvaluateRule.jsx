import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Grid, Box, CircularProgress, Select, MenuItem } from '@mui/material';
import toast from 'react-hot-toast';
import { api } from '../apiConfig';

const EvaluateRule = () => {
    const [rules, setRules] = useState([]);
    const [selectedRule, setSelectedRule] = useState(null);
    const [evaluationResult, setEvaluationResult] = useState("NULL"); // Initially null
    const [loading, setLoading] = useState(false); // Loading state
    const [userData, setUserData] = useState({
        age: '',
        department: '',
        salary: '',
        experience: ''
    });

    useEffect(() => {
        const fetchRules = async () => {
            const response = await api.get("/api/rules");
            setRules(response.data);
        };
        fetchRules();
    }, [])

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        setLoading(true);
        const formatedData = {
            ...userData,
            age : parseInt(userData.age),
            experience : parseInt(userData.age),
            salary : parseInt(userData.salary),
        }
        const fetch = async()=>{
            try{
                const response = await api.post(`/api/rules/${selectedRule.id}/evaluate`,formatedData);
                toast.success("Evaluation Result Success!");
                setEvaluationResult(response.data === true?"True":"False");
                console.log(evaluationResult)
            }
            catch(err){
                toast.error(err.message);
            }
        }
        setTimeout(() => {
            fetch();
            setLoading(false);
        }, 1500);
    };

    return (
        <div>
            <Box className="bg-blue-50 p-4 rounded-md mb-6 text-center">
                {loading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <Typography variant="h4" className=" text-sm font-bold text-blue-600">
                        Evaluation Result: {evaluationResult === null ? "NULL" : evaluationResult}
                    </Typography>
                )}
            </Box>

            <Typography variant="h5" className="text-center mb-6 text-gray-800 font-semibold">
                Enter User Data to Evaluate Rule
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                <label className="text-lg font-semibold">Select Rule</label>
                    <Select
                        value={selectedRule?.id || ""}
                        onChange={(e) => setSelectedRule(rules.find(rule => rule.id === e.target.value))}
                        fullWidth
                        variant="outlined"
                    >
                        {rules.map((rule) => <MenuItem key={rule.id} value={rule.id}> {rule.ruleString || `Rule ${rule.ruleString}`}</MenuItem>)}
                    </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Age"
                        name="age"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={userData.age}
                        onChange={handleChange}
                        className="mb-4"
                        InputProps={{ inputProps: { min: 0 } }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Department"
                        name="department"
                        fullWidth
                        variant="outlined"
                        value={userData.department}
                        onChange={handleChange}
                        className="mb-4"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Salary"
                        name="salary"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={userData.salary}
                        onChange={handleChange}
                        className="mb-4"
                        InputProps={{ inputProps: { min: 0 } }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Experience (Years)"
                        name="experience"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={userData.experience}
                        onChange={handleChange}
                        className="mb-4"
                        InputProps={{ inputProps: { min: 0 } }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-full text-lg py-3"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        Evaluate Rule
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default EvaluateRule;
