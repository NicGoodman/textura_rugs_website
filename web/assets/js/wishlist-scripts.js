$(function () {
    $('body').on('submit', '#remove-button', removeFromWishList);
    $('body').on('submit', '#send-wishlist', wishlistCC);
});

function wishlistCC() {
    var setCC = document.getElementById('from-email').value;
    document.getElementById('ccEmail').value = setCC;
}



function toggleButtonText() {
    var button = document.getElementById("wish-list-button");
    $(button).text($(button).text() == 'Add to Wishlist' ? 'Remove From Wishlist' : 'Add to Wishlist');
}

function removeFromWishList(e) {
    e.preventDefault();
    var form = $(e.currentTarget);
    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        async: false,
        dataType: 'html',
        data: form.serialize(),
    });
    $.ajax({
        url: '/wish-list',
        async: false,
        dataType: 'html',
        success: function (response) {
            refreshWishList(response);
        }
    });
    toggleButtonText();
}


// Event handler for the filter click


function refreshWishList(html) {
    // Update the .inventoryItemContent DOM element with new HTML
    var $html = $('<div />').append(html);
    $('.wishListContent').html($html.find('.wishListContent').html());
}