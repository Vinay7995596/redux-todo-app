import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deletedUser } from "../../userReducer"
const Home = () => {
    const selector = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const deletedbutton = (id) => {
        dispatch(deletedUser({id : id}))
    }
    
    return (
        <>
        <div>
        <Link to={'/new'}> <button>Create new</button></Link>
           
        </div>
            <div>
                {
                    selector.map((items) => (
                        <div key={items.id}>
                            <h2>{items.name}</h2>
                            <p>{items.email}</p>
                            <p>{items.gender}</p>
                            <Link to={`/edit/${items.id}`}><button>edit</button></Link>
                            <button onClick={() => deletedbutton(items.id)}>delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home