import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box className="p-8 bg-gray-100 min-h-screen">
      <Typography variant="h3" align="center" gutterBottom className="font-bold text-gray-800">
        About Our Rule Engine
      </Typography>
      <Typography variant="body1" align="center" className="mb-8 text-gray-600">
        Welcome to the <strong>Rule Engine Project</strong> — a powerful and intuitive tool designed to streamline and automate complex decision-making processes for businesses. Built with cutting-edge technology, our rule engine simplifies evaluating business rules by providing an easy-to-use interface for rule creation, modification, and execution.
      </Typography>

      <Typography variant="h5" className="font-semibold text-gray-700">
        Key Features:
      </Typography>
      <ul className="list-disc pl-6 mt-4 text-gray-600">
        <li><strong>Dynamic Rule Creation:</strong> Create and manage business rules using a graphical interface that supports a wide range of operations (AND, OR, etc.).</li>
        <li><strong>AST-Based Evaluation:</strong> Rules are evaluated using an Abstract Syntax Tree (AST) for efficient and accurate processing of logical conditions.</li>
        <li><strong>User-Friendly UI:</strong> Powered by <strong>React</strong>, the interface allows users to visualize and interact with rules, providing real-time feedback on rule outcomes.</li>
        <li><strong>Real-Time Visualization:</strong> Visualize rules in a tree structure to understand the decision flow, with support for complex logical conditions.</li>
        <li><strong>Mobile-Friendly:</strong> Optimized for mobile devices with a responsive design.</li>
        <li><strong>Backend Integration:</strong> The backend is built using <strong>Spring Boot</strong>, supporting seamless rule processing and evaluation with role-based access control.</li>
        <li><strong>Evaluation Engine:</strong> Capable of evaluating user data against predefined rules and delivering fast results.</li>
      </ul>

      <Typography variant="h5" className="font-semibold text-gray-700 mt-8">
        Technologies Used:
      </Typography>
      <ul className="list-disc pl-6 mt-4 text-gray-600">
        <li><strong>Frontend:</strong> React, Tailwind CSS, Material UI, React Hot Toast</li>
        <li><strong>Backend:</strong> Spring Boot</li>
        <li><strong>Data Visualization:</strong> AST rendered via tree visualization libraries</li>
        <li><strong>Deployment:</strong> Dockerized Spring Boot Application</li>
        <li><strong>Database:</strong> MySQL for persisting rules and user data</li>
      </ul>
    </Box>
  );
};

export default AboutPage;
