/*
  Theme Name: Fossil | Gas Station & Petrol Pump HTML Template
  Author: Capricorn_Theme
  Creation Date: 07 Feb 2024
  Version: 1.0
*/

/* [Table of Contents]

* 01. Mobile Menu 
  02. Header Search Form 

  03. Owl Carousel
        - Hero Area Slider
        - Testimonial Carousel
		- Client Carousel
  04. Sticky Area
  05. Progress Bar 
  06. Counter Up 
  07. Wow Animation 
  08. Scroll to the Top
  09. Active & Remove Class
  10. Menu Active Color
  11. Preloader 

*/
(function ($) {
	"use strict";

	// Mobile Menu

	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	//Header Search Form
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	// Hero Area Slider

	$('.homepage-slides').owlCarousel({
		items: 1,
		dots: false,
		nav: false,
		loop: false,
		autoplay: false,
		autoplayTimeout: 0,
		smartSpeed: 0,
		slideSpeed: 0,
		animateOut: 'fadeOut',
		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: true,
				dots: false,
			}
		}
	});


	$(".homepage-slides").on("translate.owl.carousel", function () {
		$(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").removeClass("animated fadeInDown").css("opacity", "1");
	});

	$(".homepage-slides").on("translated.owl.carousel", function () {
		$(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").addClass("animated fadeInDown").css("opacity", "1");
	});


	// Testimonial Carousel

	$('.client-carousel').owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: false,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 1,
				nav: false
			},

			990: {
				items: 2,
				loop: true,

			},
			1200: {
				items: 2,
				dots: true,
				loop: true,
			}
		}
	});


	// Client Carousel 

	$('.logo-carousel').owlCarousel({
		items: 5,
		margin: 30,
		dots: false,
		nav: false,
		loop: true,
		autoplay: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
				dots: false,
			},
			600: {
				items: 2,
				nav: false,
				dots: false,
			},
			768: {
				items: 4,
				nav: false,
				dots: false,
			},
			1100: {
				items: 5,
				nav: false,
				dots: true,
			}
		}
	})

	// Service Slider

	$(".service-item-wrap").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
			nav: false,
			dots: false,
		  },
	
		  575: {
			items: 1,
			nav: false,
			dots: false,
		  },
	
		  767: {
			items: 2,
			nav: false,
		  },
	
		  990: {
			items: 3,
			loop: true,
		  },
		  1200: {
			items: 3,
			dots: true,
			loop: true,
		  },
		},
	  });

	//jQuery Sticky Area 
	$('.sticky-area').sticky({
		topSpacing: 0,
	});

	//Progress Bar JS

	$("#bar1").barfiller({
		barColor: "#FFD857",
		duration: 5000,
	});

	$("#bar2").barfiller({
		barColor: "#FFD857",
		duration: 6000,
	});

	$("#bar3").barfiller({
		barColor: "#FFD857",
		duration: 7000,
	});

	$("#bar4").barfiller({
		barColor: "#FFD857",
		duration: 5000,
	});

	$("#bar5").barfiller({
		barColor: "#FFD857",
		duration: 6000,
	});

	$("#bar6").barfiller({
		barColor: "#FFD857",
		duration: 7000,
	});

	//Counter Up
	$(".counter-number span").each(function() {
		$(this).text($(this).text()); // Garante que o número permaneça como está
	});

	// magnific popup

	  $(".video-play-btn").magnificPopup({
		type: "iframe",
	  });


	//jQuery Animation  
	new WOW().init(

	);

	// Active & Remove Class 

	//	$(".single-serv-item").on("mouseover", function () {
	//		$(".single-serv-item").removeClass("active");
	//		$(this).addClass("active");
	//	});

	$(".single-price-item").on("mouseover", function () {
		$(".single-price-item").removeClass("active");
		$(this).addClass("active");
	});

	// Menu Active Color 

	$(".main-menu .navbar-nav .nav-link").on("mouseover", function () {
		$(".main-menu .navbar-nav .nav-link").removeClass("active");
		$(this).addClass("active");
	});

	// Preloader
	setTimeout(function () {
		$("#loader").fadeOut(600);
	}, 200);

	jQuery(window).on("load", function () {
		jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
	});


}(jQuery));


// Extra services section - Código personalizado que entrou para substituir o antigo e problemático


// JS Loader
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 500);
  }, 500);
});

// Animação personalizada para os contadores
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number .number'); // Seleciona apenas os spans com classe 'number'
    const speed = 200;

    counters.forEach(counter => {
        const target = parseFloat(counter.innerText.replace(',', '.')); // Converte para número
        const increment = target / speed;
        let current = 0;

        const isDecimal = counter.closest('#avaliacaoGoogle') !== null;
        
        const updateCounter = () => {
            current += increment;
            
            counter.innerText = isDecimal ? current.toFixed(1) : Math.floor(current);

            if (current < target) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = isDecimal ? target.toFixed(1) : target.toString();
            }
        };

        updateCounter();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillArea = document.querySelector('.skill-area');
    if (skillArea) observer.observe(skillArea);
});




// JS Images Carousel
// Inicializar Swiper de Imagens
var swiperImages = new Swiper(".mySwiperImages", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: 'bullets',
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	}
});

// Lightbox Customizado
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const triggers = document.querySelectorAll('.lightbox-trigger');
const lightboxCloseTop = document.getElementById('lightbox-close-top');

// Abrir lightbox com a imagem clicada
triggers.forEach((trigger) => {
	trigger.addEventListener('click', function(e) {
		e.preventDefault();
		const imgSrc = this.getAttribute('src');
		const imgAlt = this.getAttribute('alt');
		
		// Mostra a imagem clicada no lightbox
		lightboxImg.src = imgSrc;
		lightboxImg.alt = imgAlt;
		lightbox.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
});

// Fechar lightbox
function closeLightbox() {
	lightbox.classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', function(e) {
	if (e.target === lightbox) {
		e.preventDefault();
		closeLightbox();
	}
});

// Fechar com ESC
document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && lightbox.classList.contains('active')) {
		closeLightbox();
	}
});

// Fechar com o botão na direita superior
lightboxCloseTop.addEventListener('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	closeLightbox();
});

// Mostrar setas de navegação em mobile
function handleResize() {
	const arrows = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
	arrows.forEach(arrow => {
		arrow.style.display = 'flex';
	});
}

window.addEventListener('resize', handleResize);
handleResize();








// JS Videos carousel
// Initialize Videos Swiper
var swiperVideos = new Swiper(".mySwiperVideos", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 1,
		},
	}
});

// Pausar vídeos quando mudar de slide
swiperVideos.on('slideChange', function() {
	// Pausar todos os vídeos exceto o ativo
	const activeSlide = this.slides[this.activeIndex];
	const activeVideo = activeSlide.querySelector('video');
	
	document.querySelectorAll('.swiper-slide video').forEach(video => {
		if (video !== activeVideo) {
			video.pause();
		}
	});
});

// Mostrar setas de navegação em mobile
function handleResize() {
	const arrows = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
	arrows.forEach(arrow => {
		arrow.style.display = 'flex';
	});
}

// Variáveis para controle de clique duplo
let lastClickTime = 0;
let clickTimeout;

// Adicionar funcionalidade de play/pause e tela cheia
function setupVideoClickHandlers() {
	document.querySelectorAll('.swiper-slide video').forEach(video => {
		// Remover event listeners antigos para evitar duplicação
		video.removeEventListener('click', handleVideoClick);
		video.removeEventListener('touchstart', handleTouchStart);
		
		// Adicionar novos listeners
		video.addEventListener('click', handleVideoClick);
		video.addEventListener('touchstart', handleTouchStart, { passive: false });
	});
}

function handleVideoClick(e) {
	// Prevenir comportamento padrão
	e.preventDefault();
	e.stopPropagation();
	
	const currentTime = new Date().getTime();
	const timeSinceLastClick = currentTime - lastClickTime;
	
	// Verificar se é um duplo clique (menos de 300ms entre cliques)
	if (timeSinceLastClick < 300 && timeSinceLastClick > 0) {
		clearTimeout(clickTimeout);
		toggleFullscreen(this);
		lastClickTime = 0;
	} else {
		// Configurar timeout para clique único
		lastClickTime = currentTime;
		clickTimeout = setTimeout(() => {
			togglePlayPause(this);
			lastClickTime = 0;
		}, 300);
	}
}

function handleTouchStart(e) {
	// Para dispositivos touch, usar o mesmo mecanismo de clique duplo
	const currentTime = new Date().getTime();
	const timeSinceLastClick = currentTime - lastClickTime;
	
	if (timeSinceLastClick < 300 && timeSinceLastClick > 0) {
		e.preventDefault();
		clearTimeout(clickTimeout);
		toggleFullscreen(e.target);
		lastClickTime = 0;
	} else {
		lastClickTime = currentTime;
		clickTimeout = setTimeout(() => {
			togglePlayPause(e.target);
			lastClickTime = 0;
		}, 300);
	}
}

function togglePlayPause(video) {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function toggleFullscreen(element) {
	if (!document.fullscreenElement) {
		// Entrar em tela cheia
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.webkitRequestFullscreen) { /* Safari */
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) { /* IE11 */
			element.msRequestFullscreen();
		}
	} else {
		// Sair da tela cheia
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) { /* Safari */
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) { /* IE11 */
			document.msExitFullscreen();
		}
	}
}

// Chamar a função inicialmente
setupVideoClickHandlers();

// Reaplicar os handlers quando o Swiper atualizar (útil para loop)
swiperVideos.on('slideChangeTransitionEnd', setupVideoClickHandlers);

// Configurar evento para sair da tela cheia ao pressionar ESC
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Sair da tela cheia
        document.querySelectorAll('.swiper-slide video').forEach(video => {
            video.style.objectFit = 'contain';
        });
        
        // Rolar para a seção de vídeos
        setTimeout(scrollToVideoSection, 0); // Pequeno delay para garantir que a saída do fullscreen foi completada
    }
}

// Adicione esta função para rolar até a seção de vídeos
function scrollToVideoSection() {
    const videoSection = document.querySelector('#videos-section');
    if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('resize', handleResize);
handleResize();