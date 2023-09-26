import flags from './model/flags.js';

const main_row = document.querySelector(".row")

function show_flags(flags){
return `<div id="${flags.id} "class="flag col-2 my-2 text-center">
<img src="${flags.image}" alt="${flags.name}">
<p>${flags.name}</p>
</div>`}

flags.forEach(flag => {
    main_row.insertAdjacentHTML('beforeend',show_flags(flag))
});
