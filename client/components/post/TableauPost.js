import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

function TableauPost({ posts, deletePost }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Auteur</TableCell>
            <TableCell>Texte</TableCell>
            <TableCell>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.auteur}</TableCell>
              <TableCell>{post.texte}</TableCell>
              <TableCell>
                {' '}
                <Button
                  variant="contained"
                  endIcon={<Delete />}
                  color="error"
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableauPost;
