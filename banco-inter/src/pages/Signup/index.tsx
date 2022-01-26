
import { Wrapper, Background, InputContainer, ButtonContainer } from "../Signin/style";
import background from "../../assets/images/background-login.jpg"
import logoInter from "../../assets/images/logointer.png"
import Card from "../../components/Card";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigate ,Link } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    
    const handleToSignUp = () =>{
        navigate('/dashboard');
    }

    return(
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
                <img src={logoInter} width={122} height={31} alt="Logo do banco Inter" />
                <InputContainer>
                    <Input placeholder="NOME"/>
                    <Input placeholder="SOBRENOME"/>
                    <Input placeholder="EMAIL"/>
                    <Input placeholder="SENHA" type="password"/>
                    <Input placeholder="CONFIRMAR SENHA" type="password"/>
                </InputContainer>
                <ButtonContainer>
                    <Button type="button"
                            onClick={handleToSignUp}
                    >
                        CRIAR CONTA
                    </Button>
                    <p>Já possui uma conta? <Link to="/">Entrar</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;