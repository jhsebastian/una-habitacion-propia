import Typing from 'react-typing-animation';
import './Title.css';

const Title = ({title}) => {
    return (
            <Typing loop={true} speed={60}>
                <h1 className="temporal-title-home">{title}</h1>
                <Typing.Backspace count={25} />
            </Typing>
    )
};

export default Title;