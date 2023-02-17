// const contract = require('./mint-nft');
var i =0;
// var count = contract.get_count()
$('.increase_count').on('click',()=>{
    $('.count_value').find('span').remove()
    i+=1
    var value = `<span>Here backend value should be used. No. of times clicked ${i}</span>`
    $('.count_value').append(value)

})