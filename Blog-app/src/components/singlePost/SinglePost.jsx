import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?rs=1&pid=ImgDetMain" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-duotone fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-duotone fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Safak</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem
                 nostrum laudantium quae labore nisi consequatur facilis ratione quaerat 
                 aliquid modi hic culpa, dolor officiis earum temporibus cumque voluptatibus
                  animi officia! Laboriosam, itaque necessitatibus eum sit nihil aperiam consequuntur
                   esse enim, sequi ab quaerat doloribus modi, reiciendis non assumenda blanditiis ipsam
                    magnam! Voluptatibus commodi natus eaque recusandae, quia maxime temporibus expedita
                     modi ex deserunt ullam, animi earum libero, inventore eveniet ad? Atque pariatur voluptas
                      cupiditate voluptatem iure illo tempora architecto aliquid hic eveniet, voluptatibus quae
                       veritatis, nulla quos nesciunt eaque culpa velit, aspernatur laborum optio alias voluptatum 
                       ipsum excepturi eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem
                 nostrum laudantium quae labore nisi consequatur facilis ratione quaerat 
                 aliquid modi hic culpa, dolor officiis earum temporibus cumque voluptatibus
                  animi officia! Laboriosam, itaque necessitatibus eum sit nihil aperiam consequuntur
                   esse enim, sequi ab quaerat doloribus modi, reiciendis non assumenda blanditiis ipsam
                    magnam! Voluptatibus commodi natus eaque recusandae, quia maxime temporibus expedita
                     modi ex deserunt ullam, animi earum libero, inventore eveniet ad? Atque pariatur voluptas
                      cupiditate voluptatem iure illo tempora architecto aliquid hic eveniet, voluptatibus quae
                       veritatis, nulla quos nesciunt eaque culpa velit, aspernatur laborum optio alias voluptatum 
                       ipsum excepturi eum?</p>
        </div>
    </div>
  )
}

export default SinglePost