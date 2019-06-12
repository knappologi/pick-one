$(function() {
    $('.resultGroup').hide();
})

let addOption = function(){
    $('.inputs').append('<input type="text" placeholder="Something else">');
}

let changeTitleColor = function() {

};

$('.addButton').click(addOption);


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