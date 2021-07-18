import { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import balloonsImg from '../../assets/images/balloons.png';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { RiWhatsappLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiTwitterLine } from 'react-icons/ri';

export function Register() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [difference, setDifference] = useState(0);
    const [currentTime, setCurrentTime] = useState<any>();
    const [userEmail, setUserEmail] = useState('');

    function handleSendUserToLocalStorage() {
        if (userEmail === '') {
            alert('Fill fields name and email is required.')
        } else {
            localStorage.setItem('E-mail', userEmail);
            alert('User has been successfully registred.')
        }
    }

    const blackFridayTime: any = new Date(`November 26 2021 00:00:00`)

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        setDifference(blackFridayTime - currentTime)
        setSeconds(Math.floor(difference / 1000) % 60)
        setMinutes(Math.floor(difference / 1000 / 60) % 60)
        setHours(Math.floor(difference / 1000 / 60 / 60) % 24)
        setDays(Math.floor(difference / 1000 / 60 / 60 / 24))
    }, [currentTime],
    );

    return (
        <>
            <Header />
            <Container>
                <aside>
                    <img src={balloonsImg} alt="Illustration showing questions and answers" />
                </aside>
                <div className="counter">
                    <div>
                        <p>Days:</p>
                        <span>{days === 0 ? 'Loading...' : days}</span>
                    </div>
                    <div>
                        <p>Hours:</p>
                        <span>{hours === 0 ? 'Loading...' : hours}</span>
                    </div>
                    <div>
                        <p>Minutes:</p>
                        <span>{minutes === 0 ? 'Loading...' : minutes}</span>
                    </div>
                    <div>
                        <p>Seconds:</p>
                        <span>{seconds === 0 ? 'Loading...' : seconds}</span>
                    </div>
                </div>
                <main>
                    <div className="main-content">
                        <form>
                            <h3>E-mail:</h3>
                            <input
                                type="email"
                                placeholder="email"
                                onChange={event => setUserEmail(event.target.value)}
                                value={userEmail}
                                required
                            />
                            <button type="submit" onClick={handleSendUserToLocalStorage}>
                                Subscribe our newsletter
                            </button>
                        </form>
                        <div>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5521999999999&text=Hello, I wanna know more about discounts."><RiWhatsappLine size={40} /></a>
                            <a target="_blank" href="https://www.instagram.com/gamaacademy/"><RiInstagramLine size={40} /></a>
                            <a target="_blank" href="https://twitter.com/vtexonline"><RiTwitterLine size={40} /></a>
                        </div>
                    </div>
                </main>
            </Container>
            <Footer />
        </>
    );
}

// Arrumar o NaN do useEffect