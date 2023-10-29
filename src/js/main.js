let btn = document.querySelector('.hamburger-js');
let menu = document.querySelector('.menu-js');
btn.addEventListener ('click', () => {
    menu.classList.toggle('left-1');
})
let shakl = document.querySelector('.shakl');
let shakl_1 = document.querySelector('.shakl_1');
let shakl_2 = document.querySelector('.shakl_2');
let shakl_3 = document.querySelector('.shakl_3');
let uchburchak_a = document.querySelector('.uchburchak_a');
let uchburchak_b = document.querySelector('.uchburchak_b');
let uchburchak_c = document.querySelector('.uchburchak_c');
let uchburchak_yuza = document.querySelector('.uchburchak_yuza');
function uchburchak_yuzasi(){
    uchburchak_yuza.innerHTML = Number(uchburchak_a.value)*Number(uchburchak_b.value)*0.5;
};
function uchburchak_perimetri(){
    uchburchak_yuza.innerHTML = Number(uchburchak_a.value)+Number(uchburchak_b.value)+Number(uchburchak_c.value);
};
let kv_a = document.querySelector('.kv_a');
let kv_yuza = document.querySelector('.kv_yuza');
function kv_yuzasi(){
    kv_yuza.innerHTML = Math.pow(Number(kv_a.value), 2);
}
function kv_perimetri(){
    kv_yuza.innerHTML = Number(kv_a.value) * 4;
}
let d1_a = document.querySelector('.d1_a');
let d2_a = document.querySelector('.d2_a');
let romb_yuza = document.querySelector('.romb_yuza');
function romb_yuzasi(){
    romb_yuza.innerHTML = Number(d1_a.value)*Number(d2_a.value);
}
function romb_perimetri(){
    romb_yuza.innerHTML = Number(d1_a.value)*4;
}
let p_a = document.querySelector('.p_a');
let p_h = document.querySelector('.p_h');
let p_yuza = document.querySelector('.p_yuza');
function p_yuzasi(){
    p_yuza.innerHTML = Number(p_a.value)*Number(p_h.value);
}
function p_perimetri(){
    p_yuza.innerHTML = 2 * Number(p_a.value) + 2 * Number(p_h.value);
}