import {HeaderContainer, HeaderWrapper, UserInfo} from "./styles"
import LogoInter from "../../assets/images/logointer.png";
import UserCircle from "../UserCircle";
import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const navigate = useNavigate();

    const handleLogOff = () => {
        navigate("/")
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={LogoInter} width={122} height={31} alt="Logo do banco Inter" />
                <UserInfo>
                    <UserCircle initials="PF"/>
                    <div>
                        <p>Olá, <span className="primary-color font-bold">Ricardo Araujo</span></p>
                        <strong>12000-0</strong><br/>
                        <a href="#" onClick={handleLogOff} >Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;