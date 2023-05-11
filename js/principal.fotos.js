function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}
include('js/crawler.js');

	marqueeInit({
	  uniqueid: 'fotos-container',
	  style: {
		'width': '100%',
		'height': '383px'
	  },
	  inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	  mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	  moveatleast: 2,
	  neutral: 150,
	  savedirection: true,
	  random: false
	});
