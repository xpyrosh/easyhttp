const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, response){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(response);

//     }
// });

// Get Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, response){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(response);

//     }
// });

// Create data
const data = {
    title: 'Custom Post',
    body: 'A body'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log(post);
//     }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log(post);
//     }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response){
    if(err){
        console.log(err);
    }
    else{
        console.log(response);

    }
});