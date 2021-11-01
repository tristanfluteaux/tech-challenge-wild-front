import axios from "axios"
import { useCallback } from "react"

const InputSearch = ({ argo, setArgo, refresh, setRefresh }) => {

    const onChangeHandler = useCallback(
        ({ target: { name, value } }) =>
          console.log(argo) ||
          setArgo(state => ({ ...state, [name]: value }), [])
      )

    const handleClick = async (event) => {
        event.preventDefault()
        const newPost = {...argo}
        if (newPost.length > 19) {
            alert('Nom trop long, chande de nom, va mourrir')
        }
         else if (argo) {
            try {
                const result = await axios.post('http://localhost:4000/argonauts', newPost)
                console.log(result)
                setRefresh(!refresh)
                
            } catch (err) {
                console.log(err)
            }
        }
    }

    const check = () => {
        if (argo > 19) {
            alert('Nom trop long, chande de nom, va mourrir')
        }
    }

    return (  
        <div style={{display: 'flex', justifyContent:'center', paddingTop: '100px', paddingBottom: '100px'}}>
            <form method='post'>
                <input 
                type='text'
                name='argo_name' 
                key='argo_name'
                onChange={onChangeHandler} 
                style={{width: '300px'}}
                />
                <button
                type='submit'
                onClick={handleClick}
                >
                Send 
                </button>
            </form>
        </div>
    );
}
 
export default InputSearch;