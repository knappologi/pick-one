const states = {
    START: 'start',                 // When entering the page, or when reseting all options
    PICKONEFORME: 'pickoneforme',    // Pick a winner first time
    NEWPICK: 'newpick',             // Pick another from the options 

}
let options = [];
let state = states.START;


$(function() {
    $('.resultGroup').none();
})

let addOption = function(){
    $('.inputs').append('<input type="text" placeholder="Something else">');
}
$('.addButton').click(addOption);


let submit = function(){
    $('.inputGroup').hide();
    
    let winner;
    $('input').each(function(){
        options.push($(this).val());
    })
    
    winner = options[Math.floor(Math.random() * options.length)];
    console.log(winner);
    $('.resultGroup').append('<h2>' + winner + '</h2>');
    $('.resultGroup').display();
}
$('.submit').click(submit);



$('.apple').click(function(){
    $(this).addClass("rotate-center");
});

$('.apple').hover(function(){
    $(this).removeClass("rotate-center");
});



/*
Spinn on hover

$('.apple').hover(function(){
    $(this).toggleClass("rotate-center");
});

*/