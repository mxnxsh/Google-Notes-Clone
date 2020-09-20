import { NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS, NOTE_SAVE_REQUEST, NOTE_SAVE_SUCCESS, NOTE_SAVE_FAIL, NOTE_LIST_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, NOTE_DELETE_FAIL } from "../constants/noteConstant";

function noteListReducer (state = { notes: [] }, {type,payload}) {
    switch (type) {
        case NOTE_LIST_REQUEST:
            return {loading:true, notes:[]}
        case NOTE_LIST_SUCCESS:
            return {loading:false,notes:payload}
        case NOTE_LIST_FAIL:
            return {loading:false,error:payload}
        default:
            return state;
    }
}

function noteSaveReducer (state = { note: {} }, {type,payload}) {
    switch (type) {
        case NOTE_SAVE_REQUEST:
            return {loading:true}
        case NOTE_SAVE_SUCCESS:
            // console.log(payload)
            return {loading:false,note:payload,success:true}
        case NOTE_SAVE_FAIL:
            return {loading:false,error:payload,success:false}
        default:
            return state;
    }
}
function noteDeleteReducer (state = { note: {} }, {type,payload}) {
    switch (type) {
        case NOTE_DELETE_REQUEST:
            return {loading:true}
        case NOTE_DELETE_SUCCESS:
            // console.log(payload)
            return {loading:false,note:payload, success:true}
        case NOTE_DELETE_FAIL:
            return {loading:false,error:payload, success:false}
        default:
            return state;
    }
}


export {noteListReducer,noteSaveReducer,noteDeleteReducer}