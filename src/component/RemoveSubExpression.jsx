import { useState, useEffect } from "react";
import { Grid, Select, MenuItem, TextField, Button } from "@mui/material";
import axios from "axios";
import { api } from "../apiConfig";
import toast from "react-hot-toast";

const RemoveSubExpression = () => {
  const [rules, setRules] = useState([]);
  const [selectedRule, setSelectedRule] = useState(null);
  const [condition, setCondition] = useState("");

  useEffect(()=>{
    const fetchRules = async () => {
        const response = await axios.get("http://localhost:8080/api/rules");
          setRules(response.data);
        };
        fetchRules();
},[])

  const handleRemoveSubExpression = async () => {
    try {
      const response = await api.delete("/api/rules/removeSubExpression", {
        params: {
          ruleId: selectedRule.id,
          condition: condition
        }
      });
      toast.success("Sub-expression removed successfully");
      setSelectedRule(null);
      setCondition("");
    } catch (error) {
      toast.error("Error removing sub-expression:",error.message);
    }
  };

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
                        label="Condition"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRemoveSubExpression}
                        className="w-full"
                    >
                        Remove Sub-Expression
                    </Button>
                </Grid>
            </Grid>
        </div>
  );
};

export default RemoveSubExpression;
