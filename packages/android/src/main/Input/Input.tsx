import * as react from 'react';
import { Core } from '@trainergo/core';
import { IInputProps, IInputFactory } from './IInput';


const InputFactory: IInputFactory = () => {

   class Input extends react.Component<IInputProps> {
      private res = new Core().isItTrueOrFalse();

      render() {
         return (
            <input type="text" />
         )
      }
   }

   return Input
}


export { InputFactory }