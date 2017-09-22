$(function () {

	var availableTags = ["Проворный ткачик", "ПРОФИ-СПОРТ", "Проспект", "Просто Чудо", "Прокат Пони+"];

	$(".content__input_franshize").autocomplete({
		source: availableTags
	});

	var $phone = $(".content__input_phone");
	var $button = $(".content__btn");
	var $phoneValue;
	var $phoneLength;

	$phone.mask("?+7 999 999-9999");

	$button.click(function (e) {
		$phoneValue = $phone.val();
		$phoneLength = $phoneValue.length;
		$error();
		$length(e);
	});

	$length = function (event) {
		if ($phoneLength == 0) {
			event.preventDefault();
			$phone.after('<p class="text text_s color color_red content__error-message">Укажите номер телефона</p>');
			$phone.addClass("error-input");
		} else if ($phoneLength != 0 && $phoneLength != 15) {
			event.preventDefault();
			$phone.after('<p class="text text_s color color_red content__error-message">Укажите правильный телефон</p>');
			$phone.addClass("error-input");
		} else {
			return true;
		}
	};

	$error = function () {
		if ($("p").is(".content__error-message")) {
			$(".content__error-message").remove();
		}
	};
});
//# sourceMappingURL=app.js.map
