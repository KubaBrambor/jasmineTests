describe("Sprawdzenie funkcji letCount", function(){
        function counter(count) {
            count = count + 1;
            return count;
        }
       
    it("should return count + 1", function(){
        var result = counter(2);

        expect(result).toBe(3);
    })
})