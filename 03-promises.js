const post = [
    { title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' },
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        post.forEach(post => {
            output += `<li>${post.body}</li>`
        })
        document.body.innerHTML = output
    }, 3000)
}

function createPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true
            if (!error) {
                post.push(newPost)
                resolve('Post created!') //return
            } else {
                reject('No se pudo resolver la promesa')  //return
            }
        }, 2000)
    })
}

createPost({title: 'Post Three', body: 'This is post Three'})
    .then(getPosts)
    .catch(result => console.log(result))