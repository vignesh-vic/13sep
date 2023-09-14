function ontoggleMenu(e){
    e.name=e.name === 'menu' ? 'close':'menu'
    menu=document.getElementById('menu');
   
}
function togglec(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
    else{
        menu.classList.add('hidden')
    }
    }
   
    
