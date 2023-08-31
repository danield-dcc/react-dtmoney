import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from '../../assets/logo.svg'


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt=""></img>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
