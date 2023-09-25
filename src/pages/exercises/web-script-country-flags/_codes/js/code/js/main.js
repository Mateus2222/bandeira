import flags from './model/flags.js';

const main_row = document.querySelector(".row")

function show_flags(flags){
return `<div id="${flags.id} "class="flag col-2 my-2 text-center">
<img src="https://www.countryflags.io/${flags.name}/flat/64.svg alt="${flags.name}">
<p>${flags.name}</p>
</div>`}

flags.forEach(flag => {
    main_row.insertAdjacentHTML('beforeend',show_flags(flag))
});
