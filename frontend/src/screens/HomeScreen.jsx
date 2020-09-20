import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, listNote } from '../actions/noteAction';
import { useEffect } from 'react';

function HomeScreen() {
   const [title, setTitle] = useState('');
   const [note, setNote] = useState('');

   const saveNote = useSelector(state => state.saveNote);
   const {
      loading: loadingSave,
      error: errorSave,
      success: successSave,
   } = saveNote;
   const noteList = useSelector(state => state.noteList);
   const { loading, notes, error } = noteList;
   const delNote = useSelector(state => state.delNote);
   const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
   } = delNote;
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listNote());
      return () => {
         //
      };
   }, [successSave, successDelete]);
   const deleteHandler = product => {
      dispatch(deleteNote(product._id));
   };

   const submitNote = e => {
      e.preventDefault();
      dispatch(addNote({ title, note }));
      setTitle('');
      setNote('');
   };
   return (
      <>
         <div className='main'>
            <form>
               {loadingSave && <div>Loading...</div>}
               {errorSave && <div>{errorSave}</div>}
               {loadingDelete && <div>Loading...</div>}
               {errorDelete && <div>{errorDelete}</div>}
               {loading && <div>Loading...</div>}
               {error && <div>{error}</div>}
               <input
                  name='title'
                  onChange={event => setTitle(event.target.value)}
                  value={title}
                  placeholder='Title'
               />
               <textarea
                  name='note'
                  onChange={event => setNote(event.target.value)}
                  value={note}
                  placeholder='Take a note...'
                  rows='3'
               />
               <button onClick={submitNote}>Add</button>
            </form>
         </div>
         <div>
            {console.log('Notes=>', notes)}
            {!notes ? (
               <div> Create notes</div>
            ) : (
               notes.map(note => {
                  return (
                     <div className='note' key={note._id}>
                        <h1>{note.title}</h1>
                        <p>{note.note}</p>
                        <button
                           onClick={() => {
                              deleteHandler(note);
                           }}
                        >
                           <i className='fa fa-trash-o' aria-hidden='true'></i>
                        </button>
                     </div>
                  );
               })
            )}
         </div>
      </>
   );
}

export default HomeScreen;
