import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Trend Giphy App'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Trend Giphy App' className='lmj-logo' />
            <h2 className='lmj-title'>{title}</h2>
        </div>
    )
}

export default Banner