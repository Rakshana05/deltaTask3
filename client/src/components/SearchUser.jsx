import { useState,useEffect,useContext } from "react"
import { UserContext } from '../UserContext';
import ViewQuiz from './ViewQuiz';
export default function Search() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [userInfo,setUserInfo] = useState(useContext(UserContext).userInfo)
    useEffect(() => {
        fetch('http://localhost:9000/search').then(response=>{
            response.json().then(userList=>setUsers(userList))    
        })
    }, [])

    const filteredUsers = search.length === 0 ? [] : 
    users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
    
    function handleClick(id,username) {
        setSearch(username)
        setUserInfo({username:username,id:id})
    }
    return (
        <div>
            <div className="searchBar">
            <input 
                
                type="text" 
                placeholder="Search by name" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="searchDetails">  
                <ul className="searchResults">
                {filteredUsers.map(user => (
                    <li key={user._id}>
                        <button onClick={()=>handleClick(user._id,user.username)}>{user.username}</button>
                    </li>   
                ))}
                </ul>
            </div>
            </div>
            <ViewQuiz key={userInfo.id} username={userInfo.username} id={userInfo.id} />
        </div>
    )
}