import { TextField } from "@mui/material"
import React from "react"

export const ComponentInput = React.memo((
    {
        id,
        name,
        value,
        onChange,
        type,
        label,
        endAdornment = null,
        multiline = false
    }:
        {
            id?: string,
            name: string,
            value: any,
            onChange: any,
            type: any,
            label: string,
            endAdornment?: any,
            multiline?: boolean
        }) => {
    return (
        <TextField
            id={id}
            type={type}
            multiline={multiline}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            style={{
                width: '100%',
            }}
            InputLabelProps={{
                style: {
                    color: 'grey',
                },
            }}
            InputProps={{
                endAdornment,
                style: {
                    color: 'grey',
                    height: '50px',
                    paddingBottom: '6px',
                },
                classes: {
                    // focused: {
                    //     borderColor: '#F26522',
                    //     borderWidth: '2px',
                    // },
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    height: 'fit-content',
                    padding: '6px',
                },
            }}
        />
    );
});
