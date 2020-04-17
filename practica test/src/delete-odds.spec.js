import {deletOdds} from './delete-odds'
import {hello} from './hello';

describe ('Delete odds', () =>{
    
    const expecteds = [2,4,6,8]
    it('Del', () => {
        expect(deletOdds()).toBe(expecteds);

    })
})