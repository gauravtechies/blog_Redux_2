import jsonPlaceholder from '../apis/jsonPLaceholder'

// export const  fetchPosts =async () =>{
//     return async function(dispatch,getState){
//         const response= await jsonPlaceholder.get('/posts');
//         dispatch({ type:'FETCH_POSTS',payload:response })
//     }
// }

// we can short upper like
export const  fetchPosts =async () => async dispatch=>{
        const response= await jsonPlaceholder.get('/posts');
        dispatch({ type:'FETCH_POSTS',payload:response })
    }
