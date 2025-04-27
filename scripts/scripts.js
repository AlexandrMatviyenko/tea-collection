$(document).ready(function () {

    $('.single-item').slick({
        infinite: true,
        slidesToShow: 1,
    });

    $(function () {
        $("#accordion").accordion({
            heightStyle: "content",
            icons: {
                header: "my-icon-closed",
                activeHeader: "my-icon-open"
            }
        });
    });


    new WOW({
        animateClass: 'animate__animated'
    }).init();


    $('.viewable-image').each(function () {
        const viewer = new Viewer(this, {
            toolbar: true,
            title: true,
            navbar: false,
            fullscreen: true
        });

        $(this).on('click', function () {
            viewer.show();
        });
    });

    let nameInput = $('#validationCustom01');
    let surnameInput = $('#validationCustom02');
    let phoneInput = $('#validationCustom03');
    let countryInput = $('#validationCustom04');
    let postIndexInput = $('#validationCustom05');
    let addressInput = $('#validationCustom06');
    let makeOrderBlock = $('#makeOrderBlock');
    let gratitudeBlock = $('#gratitudeBlock');

    postIndexInput.on('keydown', function (e) {
        if (
            !(e.key >= '0' && e.key <= '9')
        ) {
            e.preventDefault();
        }
    });

    $(phoneInput).inputmask({"mask": "(999) 999-9999"});

    $('#create-order').click(function (event) {
        event.preventDefault();

        let postIndexValue = postIndexInput.val();

        if (!nameInput.val()) {
            alert('Заполните поле Имя');
            return;
        }

        if (!surnameInput.val()) {
            alert('Заполните поле Фамилия');
            return;
        }

        if (!phoneInput.val()) {
            alert('Заполните поле Телефон');
            return;
        }

        if (!countryInput.val()) {
            alert('Заполните поле Страна');
            return;
        }

        if (!postIndexValue) {
            alert('Заполните поле Индекс');
            return;
        } else if (isNaN(postIndexValue) || postIndexValue.length !== 6) {
            alert('Индекс должен содержать ровно 6 цифр');
            return;
        }

        if (!addressInput.val()) {
            alert('Заполните поле Адрес');
            return;
        }

        makeOrderBlock.addClass('d-none');
        gratitudeBlock.removeClass('d-none').addClass('d-block');
    });
})