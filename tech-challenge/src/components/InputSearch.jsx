import axios from "axios"
import { useCallback, useState } from "react"

const InputSearch = ({ argo, setArgo, refresh, setRefresh }) => {

    const onChangeHandler = useCallback(
        ({ target: { name, value } }) =>
          console.log(argo) ||
          setArgo(state => ({ ...state, [name]: value }), [])
      )

    const handleClick = async (event) => {
        event.preventDefault()
        const newPost = {...argo}
        if (argo) {
            try {
                const result = await axios.post('http://localhost:4000/argonauts', newPost)
                console.log(result)
                setRefresh(!refresh)
                
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (  
        <div style={{display: 'flex', justifyContent:'center', paddingTop: '100px', paddingBottom: '100px'}}>
            <form method='post'>
                <input 
                type='text'
                name='argo_name' 
                key='argo_name'
                placeholder='Add argonauts ?'
                onChange={onChangeHandler} 
                style={{width: '300px',height: '30px', textAlign:'center'}}
                />
                <button
                type='submit'
                onClick={handleClick}
                style={{height: '35px'}}
                >
                Send 
                </button>
            </form>
        </div>
    );
}
 
export default InputSearch;