import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"


describe('Prueba en GifItem', () => {
  
    const title = 'Titulo del test';
    const url = 'https://www.asdagasfasfasdasdas.com/';

    test('Debe hacer match con el snapshot', () => {
      
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();


    })

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
      
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);


        //otra forma de realizarlo

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);


    })


    test('Debe de mostrar el titulo en el parrafo', () => {
      
        render(<GifItem title={title} url={url}/>);
        
        expect(screen.getByRole('paragraph').innerHTML).toContain(title);


    })
    

})
