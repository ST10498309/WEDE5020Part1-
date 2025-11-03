$(document).ready(function() {

    if ($('#menuButton').length && $('#topLinks ul').length) {
        $('#menuButton').click(function() {
            $('#topLinks ul').slideToggle(); 
        });
    }

    if ($('.gallery-container').length) {
        $('.gallery-container img').click(function() {
            $(this).toggleClass('active'); 
        });
    }

    if ($('#enquiryForm, #contactForm').length) {
        $('form').submit(function(e) {
            let valid = true;

            $(this).find('input[required], textarea[required], select[required]').each(function() {
                if ($(this).val().trim() === '') {
                    valid = false;
                    $(this).css('border', '2px solid red');
                } else {
                    $(this).css('border', '1px solid #ccc');
                }
            });

            if (!valid) {
                alert('Please fill in all required fields!');
                e.preventDefault(); // prevent form submission
            }
        });
    }

});
