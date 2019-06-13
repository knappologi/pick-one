const states = {
    START: 'start',                 // When entering the page, or when reseting all options
    PICKONEFORME: 'pickoneforme',    // Pick a winner first time
    ANOTHERPICK: 'newpick',             // Pick another item from the options 

}
let options = [];
let state = states.START;
let winner = '';


$(function() {
    $('.resultGroup').hide();
})

let addOption = function(){
    $('.inputs').append('<input type="text" class="addedOption" placeholder="Something else">');
}
$('.addButton').click(addOption);


let submit = function(){
    if (state = states.PICKONEFORME) {
        winner = '';
    }
 
    $('input').each(function(){
        let addedItem = $(this).val();
        if (addedItem != '') {
        options.push(addedItem);
        }
        console.log('this is options' + options)
    })
    console.log(options.length);
    
    if(options.length != 0) {
    while(winner == '') {
    winner = options[Math.floor(Math.random() * options.length)];
    }
    console.log('winner is: ' + winner);
    $('.resultGroup').show();
    state = states.PICKONEFORME;
    switchState();
 //   winner = '';
}
}
$('.submit').click(submit);



$('.apple').click(function(){
    $(this).addClass("rotate-center");
});

$('.apple').hover(function(){
    $(this).removeClass("rotate-center");
});

let setPickoneForMe = function(){
    $('.pickedItem').remove();
    $('.resultGroup').append('<h2 class="pickedItem">' + winner + '</h2>');
    $('.inputGroup').hide();
    $('.resultGroup').show();
}

let switchState = function(){
    switch(state) {
        case states.START:
            setStartState();
            
            //stuff
            break;
        case states.PICKONEFORME:
            setPickoneForMe();
            //stuff
            break;
        case states.ANOTHERPICK:
    }
}

let setStartState = function(){
    options.length = 0;     // clear options array 
    $('input:text').val('');
    $('.inputGroup').show();
    $('.resultGroup').hide();
    $('.addedOption').remove();
}

$('.clearButton').click(setStartState);


/*
Spinn on hover

$('.apple').hover(function(){
    $(this).toggleClass("rotate-center");
});

*/