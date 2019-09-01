describe("Testowanie obiektu Car", function(){
    var auto;

    beforeEach(function(){
        auto = new Car("Ford", "red", "1998", 120000, 0);
    })

    it("Sprawdzamy przebieg i ilosc kilometrow do wymiany oleju", function(){
        let result = auto.drive(2000);
        let oil = 10000 - auto.oilNum;
        expect(result).toBe(122000);
        expect(oil).toBe(8000);
    })

    it("Sprawdzamy zmiane koloru na niebieski", function(){
        auto.colore("blue");
        expect(auto.color).toBe("blue");
    })
})