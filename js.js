var price_array;

function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}

// Describe this function...
function priceCal() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_shopping_list = document.getElementById('shopping_list');
    price_array.unshift(getNumberOrString(document.getElementById('watch_price').value));
}

// Describe this function...
function priceCal2() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_shopping_list2 = document.getElementById('shopping_list');
    price_array.unshift(getNumberOrString(document.getElementById('mobile_price').value));
}

// Describe this function...
function priceCal3() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_shopping_list3 = document.getElementById('shopping_list');
    price_array.unshift(getNumberOrString(document.getElementById('pen_price').value));
}


price_array = [];


document.getElementById('watch_button').addEventListener('click', (event) => {
    let element_shopping_list4 = document.getElementById('shopping_list');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('product_watch').value);

    element_shopping_list4.appendChild(new_li);
    let new_li2 = document.createElement('li');
    new_li2.innerText = getNumberOrString(document.getElementById('watch_price').value);

    element_shopping_list4.appendChild(new_li2);
    let new_img = document.createElement('img');
    new_img.setAttribute("src", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYuFUQet5hybc_QHoC5LLliBByJdpro7aKg&usqp=CAU');

    element_shopping_list4.appendChild(new_img);
    let element_total = document.getElementById('total');
    priceCal();
    element_total.innerText = price_array.reduce((a, b) => a + b, 0);

});

document.getElementById('mobile_button').addEventListener('click', (event) => {
    let element_shopping_list5 = document.getElementById('shopping_list');
    let new_div = document.createElement('div');
    new_div.innerText = getNumberOrString(document.getElementById('product_mobile').value);

    element_shopping_list5.appendChild(new_div);
    let new_div2 = document.createElement('div');
    new_div2.innerText = getNumberOrString(document.getElementById('mobile_price').value);

    element_shopping_list5.appendChild(new_div2);
    let new_img2 = document.createElement('img');
    new_img2.setAttribute("src", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAwldr4cRxQfB0lx3U5tWmv3e_4IBM76Z6g&usqp=CAU');

    element_shopping_list5.appendChild(new_img2);
    let element_total2 = document.getElementById('total');
    priceCal2();
    element_total2.innerText = price_array.reduce((a, b) => a + b, 0);

});

document.getElementById('pen_button').addEventListener('click', (event) => {
    let element_shopping_list6 = document.getElementById('shopping_list');
    let new_div3 = document.createElement('div');
    new_div3.innerText = getNumberOrString(document.getElementById('product_pen').value);

    element_shopping_list6.appendChild(new_div3);
    let new_div4 = document.createElement('div');
    new_div4.innerText = getNumberOrString(document.getElementById('pen_price').value);

    element_shopping_list6.appendChild(new_div4);
    let new_img3 = document.createElement('img');
    new_img3.setAttribute("src", 'Smart_Pen.jpg');

    element_shopping_list6.appendChild(new_img3);
    let element_total3 = document.getElementById('total');
    priceCal3();
    element_total3.innerText = price_array.reduce((a, b) => a + b, 0);

});