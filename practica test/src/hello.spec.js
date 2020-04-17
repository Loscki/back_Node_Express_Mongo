import {hello} from './hello';

describe('My first test', () =>{

    it('hello world', () => {
        expect(hello()).toBe('hello');

    })

})