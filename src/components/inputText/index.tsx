interface InputTextProps {
  id: string;
  title: string;
  type?: React.HTMLInputTypeAttribute;
}

const InputText: React.FC<InputTextProps> = ({ id, title, type = 'text' }) => (
  <div>
    <label htmlFor={id}>{title}</label>
    <input type={type} name={id} id={id} />
  </div>
);

export default InputText;