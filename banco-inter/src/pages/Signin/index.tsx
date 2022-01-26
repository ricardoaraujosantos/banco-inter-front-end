import { Wrapper, Background, InputContainer, ButtonContainer } from "./style";
import background from "../../assets/background-login.jpg"
import logoInter from "../../assets/logointer.png"
import Card from "../../components/card";

const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
                <img src={logoInter} width={122} height={31} alt="Logo do banco Inter" />
            </Card>
        </Wrapper>
    )
}

export default SignIn;