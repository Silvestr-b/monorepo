

interface IInputProps {
   className: string | string[];
}

type IInput = React.ComponentType<IInputProps>

type IInputFactory = () => IInput


export { IInputProps, IInput, IInputFactory } 