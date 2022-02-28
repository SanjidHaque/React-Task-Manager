
const Button = ({text, backgroundColor, onClick}) => {
    return (
        <div>
            <button className='btn' onClick={onClick} style={{backgroundColor: backgroundColor}}> {text} </button>
        </div>
    );
};

export default Button;
