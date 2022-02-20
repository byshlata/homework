import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('');
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim().length === 0) {
            const errorSpase = 'Пустая строка не может быть именем пользователя'
            setName('');
            setError(errorSpase);
        } else if (name.trim().length !== name.length) {
            const errorEmpty = 'Пробелы в начле строки не допустимы'
            setName('');
            setError(errorEmpty);
        } else {
            addUserCallback(name);
            alert(`Hello  ${name}!`)
            setName('');
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
