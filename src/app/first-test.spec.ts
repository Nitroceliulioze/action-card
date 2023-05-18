describe('my first test', () => {
    let sut: any;

    //resets sut - system under test; every test has no effect of previous test;
    beforeEach(()=> {
        sut = {}
    })

    //actual test
    //string in describe() + string in it() should make normal sentance eg. "my first test should be true if true";
    it('should be true if true', () => {
        //arrange
        sut.a = false;

        //act
        sut.a = true;

        //assert
        //.toBe yra vienas is jasmine methods - matchers - .toBeTruthy, toEqual ir pan.
        expect(sut.a).toBe(true)
    })
})