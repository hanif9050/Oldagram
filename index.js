const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Selector
const section=document.querySelector("section")


//

// render
let htmlContainer=""
posts.forEach(item=>{
    
    htmlContainer += ` <div class="card">
                    
                    <div class="card-header">
                        <img id="person-avatar" src=${item.avatar}>
                        
                        <div class="card-info">
                            <h4 id="person-name">${item.name}</h4>
                            <p id="person-location">${item.username}</p>
                        </div>
                        
                    </div>
                    
                    <img id="person-post-img" src=${item.post}>
                    
                    <div class="card-footer">
                        
                        <div class="icon">
                            <img class="btn-like" src="images/icon-heart.png">
                            <img src="images/icon-dm.png">
                            <img src="images/icon-comment.png">
                        </div>
                        
                        <!-- <p>21,492 likes</p> -->
                        <strong><span id="person-post-like">${item.likes}</span> likes</strong>
                        
                        <P><span class="user-name" id="user-nm">${item.username}</span> just took a few mushrooms lol</p>
                        
                    </div>
                    
                </div>`
})



section.innerHTML=htmlContainer;
