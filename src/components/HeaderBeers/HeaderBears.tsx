import AuthLogout from "../Auth/AuthLogout";
import { HeaderContainer, HeaderTag } from "./styled";

const HeaderBeaers = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <span>Listagem de cervejas</span>
        <AuthLogout />
      </HeaderContainer>
    </HeaderTag>
  );
};

export default HeaderBeaers;
