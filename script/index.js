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

    document.getElementById("close-button").addEventListener('click', function(){
      document.querySelector('.pop-up').style.display = 'none';
    });

getData();
}
main();
   
// module.exports = { main }
