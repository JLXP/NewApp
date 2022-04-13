import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, Button,Box} from '@mui/material';
import { CATEGORIAS } from '../constants/data';
import { useNews } from '../hooks/useNews';

export const Form = () => {

    const {category,handleChangeCategory} = useNews();
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                label="Category"
                onChange={handleChangeCategory}
                value={category}
            >
            {CATEGORIAS.map(category => (
                <MenuItem 
                key={category.value} 
                value={category.value}>
                {category.label}
                </MenuItem>
            ))}
            </Select>

            
        </FormControl>
    </form>
  )
}
