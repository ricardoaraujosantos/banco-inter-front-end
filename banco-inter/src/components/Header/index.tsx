import {HeaderContainer, HeaderWrapper, UserInfo} from "./styles"
import LogoInter from "../../assets/images/logointer.png";

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={LogoInter} width={122} height={31} alt="Logo do banco Inter" />
                <UserInfo>
                    circulo
                    <div>
                        <p>Olá, <span className="primary-color font-bold">Ricardo</span></p>
                        <strong>12001200-0</strong>
                        <a href="#">SAIR</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;