import { useState } from "react"
import { addUser } from "../../userReducer";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const NewList = () => {
    const [nameValue,setnameValue] = useState('')
    const [emailValue, setemailValue] = useState('')
    const [genderValue, setgenderValue] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const selector = useSelector((state) => state.users)


    const name = (e) => {
        setnameValue(e.target.value)
    }
    const email = (e) => {
        setemailValue(e.target.value)
    }

    const gender = (e) => {
        setgenderValue(e.target.value)
    }

    const submitedInfo = () => {
        dispatch(addUser({ id :selector[selector.length -1].id + 1 , name : nameValue, email : emailValue, gender : genderValue}))
        navigate('/')
    }


    return (
        <>
        <div>
            <input type="text" value={nameValue} onChange={name} placeholder="enter name"/>
            <input type="email" value={emailValue} onChange={email} placeholder="enter email"/>
            <select value='' onChange={gender}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            <button onClick={submitedInfo}>Submit</button>
        </div>
        </>
    )
}

export default NewList