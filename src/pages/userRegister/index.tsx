import { Form } from "react-router-dom";
import { InputText } from '../../components';

const UserRegister: React.FC = () => {
  return (
    <div>
      <Form method="POST">
        <InputText id='name' title='Nome'/>
        <InputText id='address' title='Endereço'/>
        <InputText id='email' title='E-mail'/>
        <InputText id='password' title='Senha' type='password'/>
        <input type="submit" value="Cadastrar" />
      </Form>
    </div>
  )
}

export default UserRegister;