function fibo(base, limite) {
    base = document.getElementById("fibonacci1").value
    limite = document.getElementById("fibonacci2").value
    
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
    
  alert(total.filter(num => num >= base))
}