import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { updateUser } from "../../userReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Editing = () => {
    const {id} = useParams()
    const getingData = useSelector((state) => state.users)
    const existingData = getingData.filter(eachItem => eachItem.id == id)
    const {name, email} = existingData[0]
    const [updateName, setupdateName] = useState(name)
    const [updateemail, setUpdateemail] = useState(email)
    const displatch = useDispatch()
    const navigate = useNavigate()
    


    const nameValueChanging = (e) => {
        setupdateName(e.target.value)
    }

    const onChangeEmailValue = (e) => {
        setUpdateemail(e.target.value)
    }

    const UpdateData = () => {
        displatch(updateUser({
            name : updateName,
            email : updateemail
        }))
        navigate('/')
    }

    return(
        <>
        <div>editing app</div>
        <input type='text' value={updateName} onChange={nameValueChanging}/>
        <input type="email" value={updateemail} onChange={onChangeEmailValue}/>
        <button onClick={UpdateData}>Submit</button>
        </>
    )
}

export default Editing