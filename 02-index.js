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

function createPost(newPost, callback) {
    setTimeout(() => {
        post.push(newPost)
        callback()
    }, 5000)
}

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts)