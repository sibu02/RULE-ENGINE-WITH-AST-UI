import React, { useEffect, useState } from 'react';
import { Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { api } from '../apiConfig';
import toast from 'react-hot-toast';

const RuleList = ({setActiveComponent}) => {
    const [rules,setRules] = useState([]);
    const [deleted,setDeleted] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchRules = async () => {
              const response = await api.get("/api/rules");
              setRules(response.data);
            };
            fetchRules();
    },[deleted])

    const handleDelete = async(id) =>{
      try{
        const response = await api.delete(`/api/rules/delrule/${id}`);
        toast.success("Deleted SuccessFully")
        setDeleted(!deleted);
      }
      catch(err){
        toast.error("Failed To Delete!")
      }
      
    }
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Typography variant="h4" className="mb-4 text-center">Rule Management</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <Card key={rule.id} className="p-4 shadow-lg">
            <Typography variant="h6">{rule.ruleString}</Typography>
            <Typography variant="body2" className="mt-2">{rule.description}</Typography>
            <div className="flex justify-between mt-4">
              <Button onClick={()=>navigate(`viewtree/${rule.id}`)} variant="contained" color="primary" size="small">View</Button>
              <Button onClick={()=>setActiveComponent("evaluateRule")} variant="outlined" color="secondary" size="small">Evaluate</Button>
              <Button onClick={()=>handleDelete(rule.id)} variant="outlined" color="error" size="small">Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RuleList;
