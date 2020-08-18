$(function () {
    $('body').on('click', '.wish-list-link', onWishListClick);
    $('body').on('submit', '#remove-button', removeFromWishList);
    $('body').on('click', '#add-to-wishlist', addToWishList);
});



function addToWishList(e) {
    // prevent form submission
    var button = document.getElementById("wish-list-button");
    $(button).text($(button).text() == 'Add to Wishlist' ? 'Remove From Wishlist' : 'Add to Wishlist');
    e.preventDefault();
    var form = $(e.currentTarget);
    // submit the form via Ajax

    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        async: false,
        dataType: 'html',
        data: form.serialize()
    });
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
function onWishListClick(e) {
    e.preventDefault();
    var $wishListIcon = $(e.currentTarget);
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

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  
docReady(function() {
// Declare the callback function for the IntersectionObserver
const onIntersectionChange = () => {
    console.log('I have observed an intersection change')
}
// Instantiate an IntersectionObserver
const observer = new IntersectionObserver(onIntersectionChange)

// Assign the target element to a variable
const targetElement = document.getElementById('featured-collections')
// Observe the target element using the IntersectionObserver instance
observer.observe(targetElement)
});