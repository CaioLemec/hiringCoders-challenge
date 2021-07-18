import logoImg from '../../assets/images/logoType.png'
import { Content } from './styles';
import { HeaderButton } from './HeaderButton';

export function Header() {
    return (
        <Content>
            <div className="header-wrapper">
            <img src={logoImg} alt="Hiring Challange" />
            <div>
                <HeaderButton title="Home" redirect="/" />
                <HeaderButton title="Register" redirect="/register" />
                <HeaderButton title="Offers" redirect="/offers" />
            </div>
            </div>
        </Content>
    );
}


