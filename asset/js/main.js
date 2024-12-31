/* 메인 슬라이드 */
const mainSlide = new Swiper('.main_slide',{
    autoplay:true,
    pagination:{
        el:".swiper-pagination",
    },
    touchRatio: 0
});
/* People 슬라이드 */
const peopleSlide = new Swiper('.people_slide',{
    spaceBetween: 30,
    navigation : {
		nextEl : '.button-next',
		prevEl : '.button-prev',
	},
    breakpoints: {
        768: {
          slidesPerView: 1.1,  
        },
        320: {
          slidesPerView: 1,  
        },
    }
});
/* Card 슬라이드 */
const cardSlide = new Swiper('.card_slide',{
    spaceBetween: 30,
    navigation : {
		nextEl : '.button-next',
		prevEl : '.button-prev',
	},
    breakpoints: {
        768: {
          slidesPerView: 3,  
        },
        320: {
          slidesPerView: 1,
        },
    }
});
/* GNB Hover */
$('.gnb_item:nth-child(1)').hover(function(){
    $(this).find('.depth2').addClass('show');
    $('.gnb_list').addClass('show');
},function(){
    $(this).find('.depth2').removeClass('show');
    $('.gnb_list').removeClass('show');
})
/* 상단 언어 버튼 */
$('.lang_btn').click(function(){
    $('.lang_box').toggleClass('on');
})
/* 하단 관련 사이트 버튼 */
$('.related_btn').click(function(){
    $('.footer_right').toggleClass('show');
})
/* 검색 영역 아코디언 버튼 */
$('.corpbox').click(function(){
    $('.corpbox').toggleClass('active');
})
$('.jobbox').click(function(){
    $('.jobbox').toggleClass('active');
})
$('.sc_search select').change(function(){
    $(this).css('color','#000')
})
/* 메뉴 클릭 */
$('.navi_btn').click(function(){
    $('.group_navi').addClass('active');
    $('.navi_close_btn').addClass('show');
    $(this).addClass('hidden');
})
$('.navi_close_btn').click(function(){
    $('.navi_btn').removeClass('hidden');
    $('.group_navi').removeClass('active');
    $(this).removeClass('show');
})
$('.navi_gnb .navi_item:first-child').click(function(){
    $(this).toggleClass('active');
})
