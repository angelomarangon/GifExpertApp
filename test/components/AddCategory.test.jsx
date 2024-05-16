import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components/AddCategory"


describe('Prueba en <AddCategory />', () => {


    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        //disparamos un evento
        fireEvent.input(input, { target: { value: 'Messi' } });
        // screen.debug();

        expect(input.value).toBe('Messi');



    })


    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = "messi";

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparamos un evento
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        // screen.debug();

        expect(input.value).toBe('');



    })


    //Jest Functions
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = "messi";
        const onNewCategory = jest.fn()
        // un mock cuando hablamos de testing es una simulacion 

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparamos un evento
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        // screen.debug();

        expect(input.value).toBe('');


        // evaluamos si la funcion es llamada
        expect(onNewCategory).toHaveBeenCalled();
        // evaluamos que la funcion sea llamada 1 vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // evaluamos que haya sido llamado con nuetro inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })


    test('no debe llamar al onNewCategory si el input esta vacio', () => {


        const onNewCategory = jest.fn()
        // un mock cuando hablamos de testing es una simulacion 

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form)
        // screen.debug();

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })



})
