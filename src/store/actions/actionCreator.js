import { ADD_ACTION_TO_ARRAY, REMOVE_ACTION_FROM_ARRAY } from "./actionType";


export const submitPost = (postObject, responseHandler) => {
    return dispatch => {
        fetch("http://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                ...postObject, userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        ).then((response) => response.json()
            .then((responseJson) => {
              
                alert(`Post With Title " ${responseJson.title}" saved Succefully`);
            }
            )
        ).catch((error) => {

            dispatch({
                type: ADD_ACTION_TO_ARRAY,
                payload: postObject 
            })
            alert(error);
        }
        )
    }
}

export const removeActionFromArray = () => {
    
    return dispatch => {
        dispatch({ type: REMOVE_ACTION_FROM_ARRAY});
    }
}
