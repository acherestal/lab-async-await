fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>
        displayPosts(posts)
    )
    .catch(error => 
        {console.error('Error fetching user data:', error);})

const displayPosts = (posts) => {
    posts.forEach(post => {

        const list = document.createElement('li');
        const title = document.createElement('h1');
        title.textContent = post.title;
        const body = document.createElement('p');
        body.textContent = post.body;

        list.append(title, body);

        const postList = document.querySelector('#post-list');
        postList.append(list);
    }
    )
}
