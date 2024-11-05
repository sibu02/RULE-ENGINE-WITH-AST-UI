import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import RuleForm from "./RuleForm";
import RuleModification from "./RuleModification";
import AddSubExpression from "./AddSubExpression";
import RemoveSubExpression from "./RemoveSubExpression";
import CombineRule from "./CombineRule";
import EvaluateRule from "./EvaluateRule";
import RuleList from "./RuleList";

const MainPage = () => {
  const [activeComponent, setActiveComponent] = useState("ruleList");
  return (
    <Box className="p-4">
      <h1 className="text-center text-xl font-bold mb-6">Rule Management System</h1>

      <Box className="flex flex-wrap justify-center gap-4 mb-6">
      <Button variant="contained" onClick={() => setActiveComponent("ruleList")}>
          Rule List
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("createRule")}>
          Create Rule
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("modifyRule")}>
          Modify Rule
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("addSubExpression")}>
          Add Sub-Expression
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("removeSubExpression")}>
          Remove Sub-Expression
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("combineRules")}>
          Combine Rules
        </Button>
        <Button variant="contained" onClick={() => setActiveComponent("evaluateRule")}>
          Evaluate Rule
        </Button>
      </Box>

      <Box className="bg-white p-6 shadow-lg rounded-lg">
        {activeComponent === "ruleList" && (
            <RuleList setActiveComponent={setActiveComponent}/>
        )}
        {activeComponent === "createRule" && (
          <>
            <RuleForm />
          </>
        )}
        {activeComponent === "modifyRule" && (
          <>
            <RuleModification />
          </>
        )}
        {activeComponent === "addSubExpression" && (
          <>
            <AddSubExpression />
          </>
        )}
        {activeComponent === "removeSubExpression" && (
          <>
            <RemoveSubExpression />
          </>
        )}
        {activeComponent === "combineRules" && (
          <>
            <CombineRule />
          </>
        )}
        {activeComponent === "evaluateRule" && (
            <EvaluateRule />
        )}
      </Box>
    </Box>
  );
};

export default MainPage;
