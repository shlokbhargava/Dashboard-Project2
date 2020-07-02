$('#warehouse-row').hide()
$(".clickable-row").click(function(){
    $("#warehouse-row").toggle();
});


$('.del').click(()=> {
    $('.warehouse-input').hide();
});


$('.add').click(()=> {
    $('.warehouse-input').show();
    let value = $('.s-no').val();
    if (value == '') {
        $('.s-no').attr('value', '1');
        value = 1; 
        console.log('hi', value);
    } else {
        value = parseInt(value) + 1;
        if ($('.save').click(()=>{
            $('.s-no').attr('value', value);
        }));
    }
});


$('.save').click(()=> {
    let value = $('.s-no').val();
    if (value == '') {
        $('.s-no').attr('value', '1');
        value = 1; 
        console.log('hi', value);
    } else {
        value = parseInt(value) + 1;
        if ($('.save').click(()=>{
            $('.s-no').attr('value', value);
        }));
    }
});

