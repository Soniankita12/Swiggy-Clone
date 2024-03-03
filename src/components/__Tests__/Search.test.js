import Body from "../Body ";
import  {render,screen} from "@testing-library/react";
global.fetch = jest.fn(()=>{
    return Promise.resolve({json:()=>{return Promise.resolve(data)}})
});
it("should search",()=>{
    render(<Body/>)
});