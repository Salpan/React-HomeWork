import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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

    return (
        <div className='form-box'>
            <p className='registration'>
                Регистрация на Tiffany.ru
            </p>
            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '260px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid ',
                    borderRadius: '4px',
                    width: '600px',
                }}
                noValidate
                autoComplete='off'
            >
                <div>
                    <TextField
                        required
                        id='outlined-required'
                        label='Фамилия'
                    />
                    <TextField
                        required
                        id='outlined-required'
                        label='Имя'
                    />
                </ div>
                <div className='div-cullom'>
                    <div className='div-wrapper'>
                        <TextField
                            id='outlined-select-currency'
                            select
                            label='Ваш город'
                            defaultValue=''
                        >
                            {cities.map((city) =>
                                <MenuItem key={city.id} value={city.name}>
                                    {city.name}
                                </MenuItem>
                            )}
                        </TextField>
                        <FormControlLabel
                            value="start"
                            control={<Checkbox />}
                            label="Я от Сенса"
                            labelPlacement="start"
                        />
                    </div>
                    <TextField
                        id='outlined-multiline-static'
                        label='О себе'
                        multiline
                        rows={4}
                    />
                </div>
                <div className='div-wrapper'>
                    <TextField
                        sx={{ backgroundColor: '#5dccf8', borderRadius: '5px' }}
                        type='submit'
                        id='outlined-multiline-static'
                        value='Регистрация'
                        rows={4}
                    />
                </div>
            </Box>
        </ div>
    )
}