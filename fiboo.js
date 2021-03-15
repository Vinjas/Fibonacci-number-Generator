function fibo(base, limite) {
    base = parseInt(document.getElementById("fibonacci1").value, 10)
    limite = parseInt(document.getElementById("fibonacci2").value, 10)
    
    if(Number.isInteger(base) && Number.isInteger(limite)) {
      if(base > 0 && limite > 0) {
        var n1 = 0
        var n2 = 1
        var sum
        var total = [0, 1]
    
        for(let i = 0; i <= limite; i++) {
          sum=n1+n2
          n1=n2
          n2=sum
          total.push(n2)
        }
        output.innerHTML = total.filter(num => num >= base)
        } else {
          output.innerHTML = "Introduce un número"
        }
      } else {
        output.innerHTML = "Introduce un número"
      }
}