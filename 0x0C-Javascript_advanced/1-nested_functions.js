let globalVariable = "welcome";

function outer() {
    alert(globalVariable);
    let course ="holberton";
    function inner() {
        alert(globalVariable + course);
        let exclamation = "!";
        function inception() {
            alert(globalVariable + course + exclamation);
        }
        inception()
    }
    inner()
}
outer()
