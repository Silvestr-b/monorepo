/// <reference types="react" />
interface IInputProps {
    className: string | string[];
}
declare type IInput = React.ComponentType<IInputProps>;
declare type IInputFactory = () => IInput;
export { IInputProps, IInput, IInputFactory };
