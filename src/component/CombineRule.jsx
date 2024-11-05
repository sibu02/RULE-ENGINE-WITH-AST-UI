import { useState, useEffect } from "react";
import { Box, Select, MenuItem, Button } from "@mui/material";
import { api } from "../apiConfig";
import toast from "react-hot-toast";

const CombineRule = () => {
  const [rules, setRules] = useState([]);
  const [selectedRules, setSelectedRules] = useState([]);
  const [operator, setOperator] = useState("");

  useEffect(()=>{
    const fetchRules = async () => {
        const response = await api.get("/api/rules");
          setRules(response.data);
        };
        fetchRules();
},[])

  const handleCombineRules = async () => {
    try {
      await api.post("/api/rules/combine", {
        ids: selectedRules,
        operator : operator
      });
      setSelectedRules([]);
      setOperator("");
      toast.success("Successfully Combined Rule")
    } catch (error) {
      toast.error("Error combining rules:", error);
    }
  };

  return (
    <Box className="p-4">
      <label className="text-lg font-semibold">Select Rules</label>
      <Select
        multiple
        value={selectedRules}
        onChange={(e) => setSelectedRules(e.target.value)}
        fullWidth
        variant="outlined"
        className="mb-4"
      >
        {rules.map((rule) => (
          <MenuItem key={rule.id} value={rule.id}>
            {rule.ruleString || `Rule ${rule.ruleString}`}
          </MenuItem>
        ))}
      </Select>

      <label className="text-lg font-semibold">Select Operator</label>
      <Select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        fullWidth
        variant="outlined"
        className="mb-4"
      >
        <MenuItem value="AND">AND</MenuItem>
        <MenuItem value="OR">OR</MenuItem>
      </Select>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCombineRules}
        className="w-full"
      >
        Combine Rules
      </Button>
    </Box>
  );
};

export default CombineRule;
