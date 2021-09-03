$('#login').on('click', () => {
    $('.login_modal').fadeIn()
});

// $('.nav_front').click(() => {
//     if ($(".front_side").css("margin-left", '-100%')) {
//         $('.front_side').animate({ marginLeft: '0%' }, 300);
//     } else if ($(".front_side").css("margin-left", '0%'))
//     { $('.front_side').animate({ marginLeft: '-100%' }, 300) }
// })

$('.nav_front').click(() => {
    $(".front_side").animate({ width: 'toggle' })
});


// $('.front_side').animate({ marginLeft: '0%' }, 800);


document.getElementById('log').addEventListener('click', (e) => {
    if (document.getElementById('email').value === "") {
        e.preventDefault();
        document.getElementById('input_id').style.display = 'block';
    } else if (document.getElementById('pw').value === "") {
        e.preventDefault();
        document.getElementById('input_pw').style.display = 'block';
    }
});

document.getElementById('closeicon').addEventListener('click', () => {
    document.getElementsByClassName('login_modal')[0].style.display = 'none';
    document.getElementById('input_id').style.display = 'none';
    document.getElementById('input_pw').style.display = 'none';
})



// #modal_close 눌렀을 때 {비밀번호를 입력하세요} 창이 닫히게 하자
// {이메일을 입력하세요}는 잘 닫히는데 비밀번호가 잘 안된다.

// document.getElementById('modal_close').addEventListener('click', () => {
//     document.getElementById('input_id').style.display = 'none';
//     document.getElementById('input_pw').style.display = 'none';
// });







