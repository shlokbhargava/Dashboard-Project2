$('.add').click(()=> {
    let value = $('.s-no').val();
    if (value == '') {
        $('.s-no').attr('value', '1');
        value = 1; 
    } else {
        value = parseInt(value) + 1;
        if ($('.save').click(()=>{
            $('.s-no').attr('value', value);
        }));
    }
}); 