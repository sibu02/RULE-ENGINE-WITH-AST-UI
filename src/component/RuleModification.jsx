import { useState, useEffect } from "react";
import {Select, MenuItem, Button, Grid} from "@mui/material";
import { api } from "../apiConfig";
import toast from "react-hot-toast";

const RuleModification = () => {
    const [rules, setRules] = useState([]);
    const [selectedRule, setSelectedRule] = useState(null);
    const [newOperator, setNewOperator] = useState("");
    const [oldOperator, setOldOperator] = useState("");
    const [toggle,setToggle] = useState(false);
    const handleModifyOperator = async () => {
        try {
            console.log(selectedRule)
            const response = await api.put(`/api/rules/modifyOperator?ruleId=${selectedRule.id}&oldOperator=${oldOperator}&newOperator=${newOperator}`);
            toast.success("Rule Operator Changed Succesfully")
            setNewOperator("");
            setOldOperator("");
            setSelectedRule([]);
            setToggle(!toggle);
        } catch (error) {
            toast.error(error.message)
            console.error("Error modifying operator:", error);
        }
    };

    useEffect(() => {
        // Fetch the rules on component mount
        const fetchRules = async () => {
            const response = await api.get("/api/rules");
            setRules(response.data);
        };

        fetchRules();
    }, [toggle]);
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
            <label className="text-lg font-semibold">Select Operator To Replace</label>
                <Select
                    value={oldOperator}
                    onChange={(e) => setOldOperator(e.target.value)}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value="AND" key={1}>AND</MenuItem>
                    <MenuItem value="OR" key={2}>OR</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={8}>
            <label className="text-lg font-semibold">Select New Operator</label>
                <Select
                    value={newOperator}
                    onChange={(e) => setNewOperator(e.target.value)}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value="AND" key={1}>AND</MenuItem>
                    <MenuItem value="OR" key={2}>OR</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={8}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleModifyOperator}
                    className="w-full"
                >
                   Modify Operator
                </Button>
            </Grid>
        </Grid>
    </div>
    );
};

export default RuleModification;
