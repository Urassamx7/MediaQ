function checkin(){
   var data =  new Date()
   var y = data.getFullYear()
   var fano = document.getElementById('data')
    var res = document.getElementById('result')


    if(fano.value.length==0 || fano.value > y){
        alert('Ano inválido, tente novamente!!')
    }else{
        var rsex = document.getElementsByName('radsex')
        var idade = y - fano.value
        var gen = ''
        var img = document.createElement('img')
        if(idade <= 15 && rsex[0].checked){
            gen = 'Menino'
            img.setAttribute('src', 'foto-bebemasc.png')
        }else if((idade <= 15 && rsex[1].checked)){
            gen = 'Menina'
        }else if(idade >= 26){
            if(rsex[0].checked){
            gen = 'Homem'
        }else{
            gen = 'Mulher'
        } 
            }else{
        gen = 'Jovem'
         }
        res.innerHTML = `${gen} com ${idade} anos \n`
        res.appendChild(img)
    }
    


}