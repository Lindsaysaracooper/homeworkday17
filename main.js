$.ajax({
            url: 'https://api.etsy.com/v2/listings/active.js?api_key=jvzg46kx917jxs68rrj82kbh&keywords=whiskey&includes=Images,Shop',
            type: 'GET',
            dataType: 'JSONP',
            success: function(response) {
                response.results.forEach(function(item, i, arr) {
                        console.log(item);
                        var photo = $('<img src="#" />');
                        $(photo).attr('src', item.Images[0].url_170x135);
                        var searchResults = $("<div>" + item.title.substring(0, 25) + item.Shop.shop_name + item.price + "</div>");
                        var uniqueDiv = $("<div class='unique'>" + searchResults + "</div>");
                        uniqueDiv.append(photo,searchResults);

                        $('body').append(uniqueDiv);
                        // var linkOffPage = searchResults;
                        $(photo).on('click', function(){
                        window.location = item.url;

                        });
                    }
                );
}
});

  // $('body').append(photo, searchResults);


//
//
//
// $.ajax({
//             url: 'https://api.etsy.com/v2/listings/active.js?api_key=jvzg46kx917jxs68rrj82kbh&keywords=whiskey&includes=Images,Shop',
//             type: 'GET',
//             dataType: 'JSONP',
//             success: function(response) {
//                 response.results.forEach(function(item, i, arr) {
//                         console.log(item);
//                         var photo = $('<img src="#" />');
//                         $(photo).attr('src', item.Images[0].url_170x135);
//                         var searchResults = $("<div>" + item.title.substring(0, 25) + item.Shop.shop_name + item.price + "</div>");
//                         $('body').append(photo, searchResults);
//                         // var linkOffPage = searchResults;
//                         $(photo).on('click', function(){
//                         window.location = item.url;
//
//                         });
//                     }
//                 );
// }
// });
//
