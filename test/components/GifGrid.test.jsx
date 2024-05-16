import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)
        // screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })


    //hacemos un mock
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Messi',
                url: 'https://asdagwadsafasdasd.com/'
            },
            {
                id: '123',
                title: 'Ronaldo',
                url: 'https://asdagwadsafasdasd.com/'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);


    })

})
