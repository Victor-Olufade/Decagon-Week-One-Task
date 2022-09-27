function main() {
    async function getData() {
        const reply = await fetch('https://swapi.dev/api/people')
        // console.log(reply);
        const obj = await reply.json()
        // console.log(obj.results)
    for(let i=0; i<obj.results.length; i++){
    const ele = document.querySelector('#p'+i)
    ele.addEventListener('click',
    function() {
        let popup = document.querySelector('.pop-up'); 
        popup.style.display= 'block';
        let inner = document.querySelector('.inner') 
        inner.innerText= `${obj.results[i].name} 
                 ${obj.results[i].gender} 
                 ${obj.results[i].height}` })
    }
    
}
getData();
}
main();
<button id = "close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden = "true">&times;</span>
        </button>