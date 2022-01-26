import { Wrapper, Background, InputContainer, ButtonContainer } from "./style";
import background from "../../assets/images/background-login.jpg"
import logoInter from "../../assets/images/logointer.png"
import Card from "../../components/Card";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
                <img src={logoInter} width={122} height={31} alt="Logo do banco Inter" />
                <InputContainer>
                    <Input placeholder="NOME"/>
                    <Input placeholder="SENHA" type="password"/>
                </InputContainer>
                <ButtonContainer>
                    <Button type="button">
                        ENTRAR
                    </Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastrar</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;