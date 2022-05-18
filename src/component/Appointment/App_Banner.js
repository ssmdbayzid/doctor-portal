
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const App_Banner = ({date, setDate}) => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='lg:mx-10 akign-left'>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default App_Banner;