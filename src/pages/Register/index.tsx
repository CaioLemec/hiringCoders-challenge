import { useEffect, useState } from 'react';
import balloonsImg from '../../assets/images/balloons.png';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Register() {
    const [ days, setDays ] = useState(0);
    const [ hours, setHours ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);

    const blackFridayTime:any = new Date (`November 26 2021 00:00:00`)
    const currentTime:any = new Date()
    const difference = blackFridayTime - currentTime

    useEffect(() => {
          setSeconds(Math.floor(difference/1000) % 60)
          setMinutes(Math.floor(difference/1000/60) % 60)
          setHours(Math.floor(difference/1000/60/60) % 24)
          setDays(Math.floor(difference/1000/60/60/24))
        },[],
      );

    const [ user, setUser ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');

    function handleSendUserToLocalStorage () {
        try {
            localStorage.setItem('User', user);
            localStorage.setItem('E-mail', userEmail);
            alert('User has been successfully registred.')
        } catch (error) {
            alert('Fill fields name and email is required.')
        }
    }

    return (
        <>
        <Header />
        <Container>
            <aside>
                <img src={balloonsImg} alt="Illustration showing questions and answers" />
            </aside>
            <main>
                <div className="main-content">
                    <form>
                        <input
                            type="name"
                            placeholder="name"
                            onChange={event => setUser(event.target.value)}
                            value={user}
                            required
                        />
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
                        <div>
                            <p>{days} Dias</p>
                            <p>{hours} Horas</p>
                            <p>{minutes} Minutos</p>
                            <p>{seconds} Segundos</p>
                        </div>
                    </form>
                </div>
            </main>
        </Container>
        <Footer />
        </>
    );
}