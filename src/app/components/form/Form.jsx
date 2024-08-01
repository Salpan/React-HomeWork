import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import './styles.css'

export const Form = () => {

    const url = "https://raw.githubusercontent.com/arbaev/russia-cities/master/russia-cities.json"

    const [cities, setCity] = useState([])

    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setCity((data.sort((a, b) => a.name > b.name ? 1 : -1)));
            })
    }, []);

    const citysName = cities.map((city) => city.name).sort()

    console.log(citysName)

    return (
        <div className='form-box'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: "250px" },
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "100%",
                    border: "1px solid",
                    borderRadius: "4px",
                    width: "600px"
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
                        id="outlined-select-currency"
                        select
                        label="Ваш город"
                        defaultValue=""
                    >
                        {cities.map((city) =>
                            <MenuItem key={city.id} value={city.name}>
                                {city.name}
                            </MenuItem>
                        )}
                    </TextField>
                    <TextField
                        id="outlined-multiline-static"
                        label="О себе"
                        multiline
                        rows={4}
                    />
                </div>
            </Box>
        </ div>
    )
}