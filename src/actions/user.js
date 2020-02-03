import axios from 'axios'
import {USER_REQUEST, USER_LOADED, USER_FAIL, ADD_USER} from './types'

export const loadUser = () => async dispatch => {
    
        dispatch({
            type: USER_REQUEST
          });

          try {
        await axios.get('/api/user').then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
              });
        })
        .catch(error => {
            dispatch({
      type: USER_FAIL,
      payload: error.message
    });
        });
    }catch (err) {
        dispatch({
            type: USER_FAIL,
            payload: err.message
          });
    }
    
}

export const submitUser = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify(data);

    return function (dispatch) {
        dispatch({
            type: USER_REQUEST
        });


        axios.post('/api/user', body, config).then(response => {
            dispatch({
                type: ADD_USER,
            });
        }).catch(error => {
            dispatch({
                type: USER_FAIL,
                payload: error.message
            });
            });
    }
}

export const userById = async (id) => {
    //let payload = {};
    try {
        const res = await axios.get(`/api/user/${id}`);
        return res.data;
        

    } catch (err) {
        console.error(err.message);
        return err.message;
    }
}

export const deleteUser = async (id) => {
    
   try {
        const res = await axios.delete(`/api/user/${id}`);
        console.log(res)
        return res.data;

    } catch (err) {
        console.error(err.message);
        return err.message;
    }
}