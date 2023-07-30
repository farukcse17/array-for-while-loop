// write a price  of the book that you have display the prices if the prices equal or below 200 but scape the height value; 

var bookPrices = [50, 100, 30, 80, 150, 200, 20, 90, 120, 300, 230, 52];
for(var i = 0; i < bookPrices.length; i++){
    var bookPrice = bookPrices[i];
    if(bookPrice >= 200){
        continue;
    }
    console.log(bookPrice);
}