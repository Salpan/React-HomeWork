import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

export const Form = () => {

    const url = "https://raw.githubusercontent.com/arbaev/russia-cities/master/russia-cities.json"

    const [city, setCity] = useState([])

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setCity((data));
            })
    }, []);

    const citysName = city.map((city) => city.name).sort()

    console.log(citysName)

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: "250px" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Фамилия"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Имя"
                    />
                </ div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="О себе"
                        multiline
                        rows={4}
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Ваш город"
                        defaultValue=""
                    >
                        {city.map((city) => {
                            return (
                                <MenuItem key={city.id} >
                                    {city.name}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </div>
            </Box>
        </>
    )
}