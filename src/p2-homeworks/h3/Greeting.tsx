import React, {ChangeEvent} from 'react'
import s from './Greeting.module.sass'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClassInput = error.length !== 0 ? s.error : s.errorNo;
    const inputClassButton = error.length !== 0 ? s.addUserError : s.addUser;
    const messageError = error.length !== 0 ? s.errorMessage : s.messageNoError;
    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClassInput}/>
            <span className={messageError}>{error}</span>
            <button className={inputClassButton} onClick={addUser}>+</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
