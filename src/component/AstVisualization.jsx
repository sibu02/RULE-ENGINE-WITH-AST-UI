import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { Box, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { api } from '../apiConfig';

const AstVisualization = () => {
    const [ast, setAst] = useState(null);
    const param = useParams();
    const id = param.id;

    const fetchAst = async () => {
        try {
            const response = await api.get(`/api/rules/${id}`);
            setAst(response.data);
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        fetchAst();
    }, [id]); 

    const renderTreeData = (node) => {
        if (!node) return null;
        const formattedNode = {
            name: node.type,
            attributes: {
                value: node.value || '',  // Display value if present
            },
        };

        const children = [];
        if (node.left) children.push(renderTreeData(node.left));
        if (node.right) children.push(renderTreeData(node.right));

        if (children.length > 0) {
            formattedNode.children = children;
        }

        return formattedNode;
    };
      

    return (
        <Box
        sx={{
            height: '80vh',   // Full-screen height
            width: '100vw',    // Full-screen width
            display: 'flex',   // Flexbox layout
            justifyContent: 'center',   // Center horizontally
            alignItems: 'center',       // Center vertically
            padding: '2rem',
            backgroundColor: '#f5f5f5'  // Light background
        }}
    >
        {ast ? (
            <Tree
                data={renderTreeData(ast)}
                orientation="vertical"
                translate={{ x: 250, y: 200 }}  // Adjust for better positioning
                collapsible={false}
                styles={{
                    links: { stroke: '#D3D3D3' },
                    nodes: {
                        node: {
                            circle: { fill: '#1f77b4' },
                            name: { fill: '#000' },
                        },
                    },
                }}
                nodeSize={{ x: 300, y: 150 }}  // Adjust node size
                zoom={0.6}  // Zoom scale
            />
        ) : (
            <Typography variant="h6" className="text-center">
                No AST data available.
            </Typography>
        )}
    </Box>
    );
};

export default AstVisualization;
