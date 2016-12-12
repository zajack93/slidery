$(function() {
  
	
	
 	var slideCount = $(".single-slide").length;
	console.log(slideCount);
	var szerokosc = 100/slideCount;     //szerokosc jednego slajdu 20% w funkcji
	var slideShow = $(".slide-show");
	slideShow.css("width", slideCount*100 + "%");
	//szerokosc kontenera
	
	var slideIndex = 0;
//	$(".single-slide").css("width", slideCount*100 + "%");
	
	slideShow.find(".single-slide").each(function(index){
		
		console.log(index);
		$(this).css("width", szerokosc + "%");
		$(this).css("left", index*szerokosc + "%");
		
	});
		
	$(".prev-slide").click(function() {
		slide(slideIndex - 1);		//wysylam do funkcji slide, ktora przyjmuje parametr newSlideIndex
		
	});
		
	$(".next-slide").click(function() {
		slide(slideIndex + 1);
	});
	
	//w momencie kliknieta chcemy cały ten kontener slideShow przesunac o odpowiedni margines w prawo lub w lewo, czyli tworzymy animacje i przekazujemy kontener jako nazwe funkcji
		
	function slide(newSlideIndex) {
		console.log(newSlideIndex);
		
		var marginLeft = (newSlideIndex * (-100)) + "%";
		//na elemencie slideshow mam wywolac animacje ktora przesunie margines z powyzsza wartoscia
		var marginRight = (newSlideIndex * 100) + "%";
		
//		if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
//			return;
//		}
//		
		if (newSlideIndex >= slideCount) {
			slideShow.animate({"margin-left": 0 + "%"}, 800);
			return;
		}
		
		slideShow.animate({"margin-left": marginLeft}, 800, function() { 
			slideIndex=newSlideIndex;
						
		}); 
		
	
	}
		
});	
	
	
	
//	$(".single-slide").each(function(index){
//		console.log(index);
//		$(this).css("width", szerokosc + "%");
//		$(this).css("left", index*szerokosc + "%");
//	
//	});
//	$(".slide-show").find(".single-slide").css({"width", 100/slideCount + "%"});
	
	

	




