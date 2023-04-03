import {describe, test} from "vitest"
import {render, screen, fireEvent} from "@testing-library/react"
import LoginForm from "../components/LoginForm"

describe("Testeo LoginForm - render and events", () => {
    test("Debe renderizar el titulo", () => {
        render(<LoginForm/>) //simulo un render
        const title = screen.getByText(/Debe loguearse!/i) //con "Debe loguearse!" es case sensitive, se lo quito con //i
        expect(title).toBeDefined()
    })
    test("First input must be rendered",()=>{
        render(<LoginForm/>)
        const input = screen.getByRole("email")
        expect(input).toBeDefined()
    })
    test("Second input must be rendered and change event must work",()=>{
        render(<LoginForm/>)
        const pass = screen.getByTestId('pass')
        fireEvent.change(pass, {target:{value:"123"}}) //simulo el valor que deseo
        expect(pass.value).toBe("123") //el valor en un componente sea igual a...
    })
    test("Button must be rendered",()=>{
        const handleclick= vi.fn() //vi para hacer mocks de funciones, de mentiritas
        render(<LoginForm handleClick={handleclick}/>)
        const button = screen.getByText("Ingresar")
        fireEvent.click(button)
        //expect(button).toBeDefined()
        expect(handleclick).toBeCalledTimes(1)
    })
})