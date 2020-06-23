import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPLaceholder'

// export const  fetchPosts =async () =>{
//     return async function(dispatch,getState){
//         const response= await jsonPlaceholder.get('/posts');
//         dispatch({ type:'FETCH_POSTS',payload:response })
//     }
// }

// we can short upper like
export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
   await dispatch(fetchPosts());
   const userIds=_.uniq(_.map(getState().posts,'userId'))
//    console.log(getState().posts);
   console.log(userIds)
   userIds.forEach(id=>dispatch(fetchUser(id)));
}
export const  fetchPosts = () => async dispatch=>{
        const response= await jsonPlaceholder.get('/posts');
        dispatch({ type:'FETCH_POSTS',payload:response.data })
    }

export const fetchUser =(id) =>async dispatch=> {
    const response= await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})

} 

// approch by memorize function to making again and again request
// export const fetchUser =(id) =>async dispatch=> {
//     _fetchUser(id,dispatch);
// } 

// const _fetchUser=_.memoize(async (id,dispatch)=>{
//     const response= await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data}) 
// });