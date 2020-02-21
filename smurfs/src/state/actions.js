import React, {  useEffect, useState } from "react";
import axios from "axios";
import { 
  NEW_SMURF,
   FETCH_SMURFS, 
   INPUT_CHANGE, 
   RESET_INPUTS,
   FETCH_SMURFS_START,
   POST_SMURFS_START,
   SPINNER_START,
   SPINNER_STOP,
   DELETE_SMURF
  
  } from "./types"; 

export function changeInput({ inputName, inputValue }) {
  return {
    type: INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  dispatch({ type: SPINNER_START });
 
  console.log("fetching inside fetchSmurfs");
 
  axios.get("http://localhost:3333/smurfs")

    .then(res =>
      dispatch({
        type: FETCH_SMURFS,
        payload: res.data
      })
   
    )
    .catch(err => {
      console.log(err)
    })

};

export const postSmurf = ({name, age, height}) => dispatch => {
  dispatch({ type: POST_SMURFS_START });
  dispatch({ type: SPINNER_START });

   axios.post("http://localhost:3333/smurfs",{name, age, height})
    
      .then(smurf =>
        dispatch({
          type: NEW_SMURF,
          payload: smurf.data
        })
     
      )
      .catch(err => {
    console.log(err)
      });
  };

  export const deleteSmurf = id => dispatch => {
    dispatch({ type:SPINNER_START });
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=>{
      dispatch({ type: SPINNER_STOP })
      dispatch({ type: DELETE_SMURF, payload:res.data});
          })
      .catch(err=>{
        console.log(err)
      })
      .finally(() => {
        dispatch({ type: SPINNER_STOP });
      });
  };
