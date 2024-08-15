import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm, Controller, useFormState } from "react-hook-form"
import { Validation } from './validation';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './styles.css'

export const Form = () => {

    // const [value, setValue] = useState(null)

    const { handleSubmit, control } = useForm({
        mode: 'onChange',
        defaultValues: {
            lastName: '',
            firstName: '',
            date: null,
            about: '',
            city: '',
            vip: false
        }
    })

    const { errors } = useFormState({ control })

    const onSubmit = (data) => console.log(data)

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
            <p className='registration-header'>
                Регистрация на Tiffany.ru
            </p>
            <Box
                onSubmit={handleSubmit(onSubmit)}
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
                    <Controller
                        control={control}
                        name='lastName'
                        rules={Validation}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                label='Фамилия'
                                onChange={onChange}
                                value={value}
                                error={errors.lastName?.message}
                                helperText={errors.lastName?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='firstName'
                        rules={Validation}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                label='Имя'
                                onChange={onChange}
                                value={value}
                                error={errors.firstName?.message}
                                helperText={errors.firstName?.message}
                            />
                        )}
                    />
                </ div>
                <div className='div-cullom'>
                    <div className='div-wrapper'>
                        <Controller
                            control={control}
                            name='city'
                            rules={Validation}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    id='outlined-select-currency'
                                    onChange={onChange}
                                    select
                                    label='Ваш город'
                                    defaultValue=''
                                    value={value}
                                >
                                    {cities.map((city) =>
                                        <MenuItem key={city.id} value={city.name}>
                                            {city.name}
                                        </MenuItem>
                                    )}
                                </TextField>
                            )}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <Controller
                                    control={control}
                                    name='date'
                                    render={({ field: { onChange, value } }) => (
                                        <DatePicker
                                            value={value}
                                            label='Дата рождения'
                                            onChange={onChange} />
                                    )}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <Controller
                        control={control}
                        name='about'
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                id='outlined-multiline-static'
                                value={value}
                                onChange={onChange}
                                label='О себе'
                                multiline
                                rows={5}
                            />
                        )}
                    />
                </div>
                <Controller
                    control={control}
                    name='vip'
                    render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                            value={value}
                            onChange={onChange}
                            control={<Checkbox />}
                            label='Я от Сенса'
                            labelPlacement='start'
                        />
                    )}
                />
                <div className='div-wrapper'>
                    <TextField
                        sx={{ backgroundColor: '#5dccf8', borderRadius: '5px' }}
                        type='submit'
                        id='outlined-multiline-static'
                        value='Регистрация'
                    />
                </div>
            </Box>
        </ div>
    )
}