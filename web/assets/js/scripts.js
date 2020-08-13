
$(document).ready(function () {
    // Add an event listener for filter clicks
    $(function () {
        $('body').on('click', '.wish-list-link', onWishListClick);
        $('body').on('submit', '#add-to-wishlist', addToWishList);
        $('body').on('click', '.wish-list-button', toggleButtonText);
    });

    function addToWishList(e) {
        // prevent form submission
        e.preventDefault();
        var form = $(e.currentTarget);
        // submit the form via Ajax

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize()
        });
    }

    function toggleButtonText(e) {
        var button = $(e.currentTarget);
        $(button).text($(button).text() == 'Add to Wish List' ? 'Remove From Wish List' : 'Add to Wish List');
    }
    // Event handler for the filter click
    function onWishListClick(e) {
        e.preventDefault();
        var $wishListIcon = $(e.currentTarget);
        var href = $wishListIcon.attr('href');
        $.ajax($wishListIcon.attr('href'), {
            dataType: 'html',
            success: function (response) {
                refreshWishList(response);
            }
        });
    }

    function refreshWishList(html) {
        // Update the .inventoryItemContent DOM element with new HTML
        var $html = $('<div />').append(html);
        $('.wishListContent').html($html.find('.wishListContent').html());
    }

});
