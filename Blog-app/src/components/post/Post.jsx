
import './post.css';

const Post = () => {
  return (
    <div className='post'>
       <img className='postImg' src="https://th.bing.com/th/id/R.8c7bd339217bf76e0087add6ee6a33c5?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0" alt="" />
       <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className='postTitle'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </span>
          <hr />

          <span className='postDate'>1 hour ago</span>
       </div>
       <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas fugiat laboriosam itaque dolorem aut ad ipsa nesciunt, esse labore officiis 
         numquam tenetur iste odio eaque quo sapiente aspernatur natus molestiae!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas fugiat laboriosam itaque dolorem aut ad ipsa nesciunt, esse labore officiis 
         numquam tenetur iste odio eaque quo sapiente aspernatur natus molestiae!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas fugiat laboriosam itaque dolorem aut ad ipsa nesciunt, esse labore officiis 
         numquam tenetur iste odio eaque quo sapiente aspernatur natus molestiae!</p>
    </div>
  )
}

export default Post;