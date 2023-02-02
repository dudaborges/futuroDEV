import gato from '../assets/gato.jpg'
const OnMouseOver = () => {

    const handleOnMouseOver = e => {
        e.target.style.margin = '20px'
        e.target.style.border = 'solid red 3px'
    }

    return (
        <div>
        <img src={gato} alt="gato" onMouseOver={handleOnMouseOver} />
        </div>

    )
}

export default OnMouseOver