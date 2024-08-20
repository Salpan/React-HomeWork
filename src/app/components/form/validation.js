
export const validation = {

    required: 'Обязательно для заполнения',
    validate: (value) => {
        if (value.match(/[a-zA-z]/)) {
            return 'Принимаем только кириллицу'
        }

        return true
    }

}