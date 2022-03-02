var ul=document.querySelectorAll('li')
var person=document.querySelectorAll('.person')
var show=document.querySelectorAll('.show')
function listart(){
    ul.forEach((li)=>{
       li.classList.add('start')
    })
    person.forEach((pe)=>{
        pe.classList.add('zoom')
     })
}
listart()
window.onscroll=function(){
    elementn()
};
function shows(a){
    var rectsTitle= a.getClientRects();
    console.log(rectsTitle)
    let heighwd=window.innerHeight;
    console.log(rectsTitle[0].bottom)
    if(!(rectsTitle[0].bottom<0 || rectsTitle[0].top>heighwd)){   
     a.classList.add('start')
    }
    else{
        a.classList.remove('start')
    }
}
function elementn(){
    show.forEach(el=> {
        console.log(el)
       shows(el) 
    });
    person.forEach(ps=>{
        var rectsTitle= ps.getClientRects();
        console.log(rectsTitle)
        let heighwd=window.innerHeight;
        console.log(rectsTitle[0].bottom)
        if(!(rectsTitle[0].bottom<0 || rectsTitle[0].top>heighwd)){   
         ps.classList.add('zoom')
        }
        else{
            ps.classList.remove('zoom')
        }
    })
}


