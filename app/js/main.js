$(function () {
  $('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});
	var menuBtn = document.querySelector(".menu__btn");
	menuBtn.addEventListener("click", function () {
		menuBtn.classList.toggle("menu__btn--active")
	});


	$(window).scroll(function () {
		var box1 = $('.menu__inner').offset().top;
		/*Если сделали скролл на 100px задаём новый класс для header*/
		if (box1 > 100) {
			$('.menu__inner').addClass('menu__scroll');
		} else {
			/*Если меньше 100px удаляем класс для header*/
			$('.menu__inner').removeClass('menu__scroll');
		}
	});

	$(window).scroll(function () {
		var box1 = $('.menu').offset().top;
		/*Если сделали скролл на 100px задаём новый класс для header*/
		if (box1 > 100) {
			$('.menu').addClass('menu__bgc--active');
		} else {
			/*Если меньше 100px удаляем класс для header*/
			$('.menu').removeClass('menu__bgc--active');
		}
	});
});



fileUploader.addEventListener('change', (event) => {
	const files = event.target.files;
	console.log('files', files);

	if (window.FileList && window.File) {
		dropZone.addEventListener('dragover', event => {
			event.stopPropagation();
			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy';
		});

		dropZone.addEventListener('drop', event => {
			filename.innerHTML = '';
			event.stopPropagation();
			event.preventDefault();
			const files = event.dataTransfer.files;
			console.log(files);

			const msg = `${files[0].name}`;

			filewrap.classList.add('active');
			filename.innerHTML = msg;
		});
	}

	const msg = `${files[0].name}`;

	filewrap.classList.add('active');
	filename.innerHTML = msg;

	removeBtn.addEventListener('click', function () {
		filewrap.classList.remove('active');
		filename.innerHTML = '';
	});
});