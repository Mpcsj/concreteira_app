export default ()=>{
    var res = 'Bem vindo'
    try{
        var today = new Date()
        var hours = today.getHours()
        if (0 <= hours  && hours<6){
            res = 'Boa madrugada'
        }else if(6<=hours && hours < 12){
            res = 'Bom dia'
        }else if(12<=hours && hours<18){
            res = 'Boa tarde'
        }else{
            res = 'Boa noite'
        }
    }catch(exception){

    }
    return res
}