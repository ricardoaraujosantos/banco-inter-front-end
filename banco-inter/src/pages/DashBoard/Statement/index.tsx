import { 
         StatementItemContainer,
         StatementContainer,
         StatementItemInfo, 
         StatementItemImage 
} from "./styles";
import { format } from "date-fns";
import { FiDollarSign} from "react-icons/fi"

interface statementItems {
        user: {
                fistName: string;
                lastName: string;
        },

        value: number;
        type: 'paid' | 'received',
        updatedAt: Date;
}

const StatementItem = ({user, value, type, updatedAt} : statementItems) => {
        return (
                <StatementItemContainer>
                        <StatementItemImage type={type}>
                                <FiDollarSign size={24} />
                        </StatementItemImage>
                        <StatementItemInfo>
                        <p className="primary-color">
                                {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </p>
                        <p>{type === 'paid' ? `Pago a `: `Recebido de`} <strong>{user.fistName} {user.lastName}</strong></p>
                        <p>{format(updatedAt, " dd/MM/yyyy 'ás' HH:mm 'h' ")}</p>
                        </StatementItemInfo>
                </StatementItemContainer>
        )
}

const Statement = () => {
        const Statements : statementItems[] = [
                {
                user: {
                        fistName: "João",
                        lastName: "da Silva",
                },

                value: 650.00,
                type: "paid",
                updatedAt: new Date(),
                },
                {
                user: {
                        fistName: "José",
                        lastName: "Ferreira",
                },

                value: 350.00,
                type: "received",
                updatedAt: new Date(),
                }             
        ];

        return (
                <StatementContainer>
                        {Statements.map(statement => <StatementItem {...statement} /> )}
                </StatementContainer>
        )
}

export default Statement;