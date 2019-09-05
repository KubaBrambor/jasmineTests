function letCount() {
    var count = 0;
    function counter() {
        count = count + 1;
        console.log(count);
    }
    return counter;
}