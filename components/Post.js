function Post(post){
    return `
        <div id = post-${post.ID}>
            <h3>${post.title}</h3>
            <p>${post.body}<p>
        </div>
    `;
}