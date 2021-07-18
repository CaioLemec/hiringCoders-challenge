import mainImg from '../../assets/images/main.svg';
import Typewriter from 'typewriter-effect';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Home() {
    const history = useHistory();

    function handleRedirectToRegister () {
        history.push('/register');
    }

    return (
        <>
        <Header />
        <Container>
            <aside>
                <strong>Black Friday</strong>
                <p>Are you ready for incredible 
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("discounts?")
                            .pauseFor(2000)
                            .deleteAll()
                            typewriter.typeString("savings?")
                            .pauseFor(2000)
                            .deleteAll()
                            typewriter.typeString("offers?")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={mainImg} alt="Illustration showing questions and answers" />
                    <button type="button" onClick={handleRedirectToRegister}>Let's check it out!</button>
                </div>
            </main>
        </Container>
        <Footer />
        </>
    );
}