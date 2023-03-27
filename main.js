$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            vaga: {
                required:true
            },
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true
            },
            link: {
                required:true
            },
            git: {
                required:true
            }
        },
        messages: {
            vaga: 'Por favor, infome a vaga desejada',
            nome: 'Por favor, informe seu nome',
            email: 'Por favor, infome seu e-mail',
            telefone: 'Por favor, infome seu telefone ou celular',
            link: 'Por favor insira o link do seu LinkedIn',
            git: 'Por favor, insira o link do seu repositório'
        } 
    })

});