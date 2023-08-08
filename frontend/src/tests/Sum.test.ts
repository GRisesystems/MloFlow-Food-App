import { describe,expect,it } from 'vitest'
import Sum from "./Sum";

describe("#Sum",()=>{
    it("returns zero with no numbers",() => {
        expect(Sum()).toBe(0)
    })
})