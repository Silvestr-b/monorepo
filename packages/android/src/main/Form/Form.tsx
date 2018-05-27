import * as react from 'react';
import { stylesheet } from 'typestyle';
import { IFormProps, IFormFactory } from './IForm';


const FormFactory: IFormFactory = (Input, theme?) => {

   class Form extends react.Component<IFormProps> {
      render() {
         return (
            <form className={styles.formStyles}>
               <Input className={styles.inputStyles} />
               <Input className={styles.inputStyles} />
               <button className={styles.buttonStyles}>Нажми</button>
            </form>
         )
      }
   }

   const styles = stylesheet({
      formStyles: {
         color: theme.formColor
      },
      inputStyles: {
         color: theme.inputColor
      },
      buttonStyles: {
         color: theme.buttonColor
      }
   })

   return Form
}


export { FormFactory }
