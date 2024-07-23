import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img className='headerImg' src="https://th.bing.com/th/id/R.3d042c92d9b167c065d4875c964d0b4a?rik=j%2bwe8hUaZqdmSA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f74165-nature-HDR-river-trees-mountain-landscape.jpg&ehk=yHKVetDTiL5y89jHLEMdJx0A%2f0iGuZctDOo3T9ozKvg%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </div>
  )
}

export default Header;