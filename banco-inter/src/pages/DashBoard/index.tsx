import Card from "../../components/Card";
import Header from "../../components/Header";
import Button from "../../components/Button"
import Input from "../../components/Input";
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from "./styles"
import Statement from "./Statement";

const DashBoard = () => {
    const wallet = 2000;

    return(
        <DashboardBackground>
           <Header />
           <BodyContainer>
               <div>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                        <h3 className="wallet">
                            {wallet.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}
                        </h3>
                        </InlineContainer>
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar com PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input placeholder="Insira a chave pix" style={{flex: 1}}/>
                            <Button>
                                Pagar
                            </Button>
                        </InlineContainer>
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber com PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                        <Input placeholder="Insira a chave pix" style={{flex: 1}}/>
                            <Button>
                                Gerar Código
                            </Button>
                        </InlineContainer>
                   </Card>
               </div>
               <div>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Extrato da conta</h2>
                        </InlineTitle>
                        <Statement />
                   </Card>
               </div>
           </BodyContainer>
        </DashboardBackground>
    )
}

export default DashBoard;