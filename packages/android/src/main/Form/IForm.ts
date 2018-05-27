import { IInput } from "../Input/IInput";

interface IFormTheme {
   formColor: string;
   inputColor: string;
   buttonColor: string;
}

interface IFormProps { }

type IForm = React.ComponentType<IFormProps>

type IFormFactory = (Input: IInput, theme?: IFormTheme) => IForm


export { IFormProps, IForm, IFormFactory } 