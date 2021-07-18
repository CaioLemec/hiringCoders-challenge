import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Swiper';
import { Container } from './styles';


export function Offers() {
    return (
        <>
        <Header />
        <Container>
            <main>
                <Carousel />
            </main>
        </Container>
        <Footer />
        </>
    );
}