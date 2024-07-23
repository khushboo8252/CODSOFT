import './write.css';


const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.hdqwalls.com/download/sunset-nature-trees-img-3840x2160.jpg" alt="" />
        <form  className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                   <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file'  id='fileInput' style={{display:"none"}}/>
                <input type='text'  placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story....." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write;