// $(function () {

//     $('body').on('submit', '#remove-button', removeFromWishList);

// });


// function removeFromWishList(e) {
//     e.preventDefault();
//     var form = $(e.currentTarget);
//     $.ajax({
//         url: form.attr('action'),
//         type: form.attr('method'),
//         async: false,
//         dataType: 'html',
//         data: form.serialize(),
//     });
//     $.ajax({
//         url: '/wish-list',
//         async: false,
//         dataType: 'html',
//         success: function (response) {
//             refreshWishList(response);
//         }
//     });
//     toggleButtonText();
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
