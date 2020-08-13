
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
        $(button).text($(button).text() == 'Add to Wishlist' ? 'Remove From Wishlist' : 'Add to Wishlist');
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





    var chevronYear = document.getElementById("chevron-year");
    var chevronHour = document.getElementById("chevron-hour");
    var chevronPrice = document.getElementById("chevron-price");
    $(function () {
        var sortOrder = 'asc',
        $toggleSortYear = $('.toggle-sort-year');
        $toggleSortHours = $('.toggle-sort-hours');
        $toggleSortPrice = $('.toggle-sort-price');

        var mixer = mixitup('#inventory-feed', {
            multifilter: {
                enable: true // enable the multifilter extension for the mixer
            },
            pagination: {
                limit: 25 // impose a limit of 8 targets per page
            },
            load: {
                sort: 'price:desc'
            }
        });
        $toggleSortYear.on('click', function () {
            $('button').removeClass('text-wz-yellow');
            $(this).addClass('text-wz-yellow');
            switch (sortOrder) {
                case 'asc':
                    sortOrder = 'desc';
                    chevronYear.classList.add("rotate-180");
                    break;
                case 'desc':
                    sortOrder = 'asc';
                    chevronYear.classList.remove("rotate-180");
                    break;
            }
            mixer.sort('sort', 'year:' + sortOrder);
        });
        $toggleSortHours.on('click', function () {
            $('button').removeClass('text-wz-yellow');
            $(this).addClass('text-wz-yellow');
            switch (sortOrder) {
                case 'asc':
                    sortOrder = 'desc';
                    chevronHour.classList.add("rotate-180");
                    break;
                case 'desc':
                    sortOrder = 'asc';
                    chevronHour.classList.remove("rotate-180");
                    break;
            }
            mixer.sort('sort', 'hours:' + sortOrder);
        });
        $toggleSortPrice.on('click', function () {
            $('button').removeClass('text-wz-yellow');
            $(this).addClass('text-wz-yellow');
            switch (sortOrder) {
                case 'asc':
                    sortOrder = 'desc';
                    chevronPrice.classList.remove("rotate-180");
                    break;
                case 'desc':
                    sortOrder = 'asc';
                    chevronPrice.classList.add("rotate-180");
                    break;
            }
            mixer.sort('sort', 'price:' + sortOrder);
        });
    });

});
