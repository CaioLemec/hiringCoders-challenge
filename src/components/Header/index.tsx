import logoImg from '../../assets/images/logoType.png'
import { Content } from './styles';
import { HeaderButton } from './HeaderButton';

export function Header() {
    return (
        <Content>
            <img src={logoImg} alt="Hiring Challange" />
            <div>
            <HeaderButton title="Register" redirect="/register" />
            <HeaderButton title="Offers" redirect="/offers" />
            </div>
        </Content>
    );
}


