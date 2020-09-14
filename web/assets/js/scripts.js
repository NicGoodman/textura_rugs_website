// $(function () {
//     $('body').on('click', '.wish-list-link', onWishListClick);
// });



// // Event handler for the filter click
// function onWishListClick(e) {
//     e.preventDefault();
//     var $wishListIcon = $(e.currentTarget);
//     $.ajax($wishListIcon.attr('href'), {
//         dataType: 'html',
//         success: function (response) {
//             refreshWishList(response);
//         }
//     });
// }

// function refreshWishList(html) {
//     // Update the .inventoryItemContent DOM element with new HTML
//     var $html = $('<div />').append(html);
//     $('.wishListContent').html($html.find('.wishListContent').html());
// }





var chevronSize = document.getElementById("chevron-size");
$(function () {
    var sortOrder = 'asc',
        $toggleSortSize = $('.toggle-sort-size');

    var mixer = mixitup('#inventory-feed', {
        multifilter: {
            enable: true // enable the multifilter extension for the mixer
        },
        pagination: {
            limit: 24
        },
        load: {
            sort: 'size:asc'
        }
    });
    $toggleSortSize.on('click', function () {
        $('button').removeClass('text-rug-grey');
        $(this).addClass('text-rug-grey');
        switch (sortOrder) {
            case 'asc':
                sortOrder = 'desc';
                chevronSize.classList.add("rotate-180");
                break;
            case 'desc':
                sortOrder = 'asc';
                chevronSize.classList.remove("rotate-180");
                break;
        }
        mixer.sort('sort', 'size:' + sortOrder);
    });
});
