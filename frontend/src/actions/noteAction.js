import axios from 'axios';
import { NOTE_SAVE_REQUEST, NOTE_SAVE_SUCCESS, NOTE_SAVE_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS, NOTE_LIST_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_DELETE_FAIL } from '../constants/noteConstant';


const listNote = () => async (dispatch,getState) =>{
    try {
        dispatch({type:NOTE_LIST_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const {data} = await axios.get('/api/note',{
            headers:{
                'Authorization':'Bearer '+userInfo.token
            }
        })
        dispatch({type:NOTE_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:NOTE_LIST_FAIL,payload:error.message})
    }
} 

const addNote = (note) => async (dispatch,getState) =>{
    try {
        dispatch({type:NOTE_SAVE_REQUEST,payload:note})
        const {userLogin:{userInfo}} = getState()
        const {data} = await axios.post('/api/note',note,{
            headers:{
                'Authorization':'Bearer '+userInfo.token
            }
        })
        dispatch({type:NOTE_SAVE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:NOTE_SAVE_FAIL,payload:error.message})
    }
} 

const deleteNote = (_id) => async(dispatch,getState) => {
    try {
        dispatch({type:NOTE_DELETE_REQUEST,payload: _id})
        const {userLogin:{userInfo}} = getState()
        const {data} = await axios.delete('/api/note/' + _id,{
            headers:{
                'Authorization':'Bearer '+userInfo.token
            }
        })
        dispatch({type:NOTE_DELETE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:NOTE_DELETE_FAIL,payload:error.message})
    }
}
export {listNote,addNote, deleteNote}