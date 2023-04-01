/***  search handel*/
let searchIcon=document.querySelector('header .container nav .search');
let searchHolder=document.querySelector('header .container nav .shearch-container');
let elementUl=document.querySelector('header .container nav ul');
const li = document.querySelectorAll('header .container nav ul li');

searchIcon.addEventListener('click',()=>{

    for(let i=0;i<li.length;i++){
        li[i].style.display='block';
    }

    searchIcon.classList.toggle('rotate');
    searchHolder.classList.toggle('hide');
    elementUl.classList.toggle('newplace');

    
});
const input = document.getElementById('search');
input.addEventListener('keyup',search);

function search(){
    const inputVal =input.value.toLowerCase();

    const li = document.querySelectorAll('header .container nav ul li');
   
    for(let i=0;i<li.length;i++){
        if(li[i].children[0].innerText.toLowerCase().includes(inputVal)){
            li[i].style.display='block';
        }else{
            li[i].style.display='none';
        }
        
    }   
}

/***  nav icon handle */
const navIcon =document.querySelector('.menu');
navIcon.addEventListener('click',()=>{

    for(let i=0;i<li.length;i++){
        li[i].style.display='block';
    }
    if(elementUl.classList.contains('newplace')){

        searchIcon.classList.remove('rotate');
        searchHolder.classList.add('hide');
        elementUl.classList.remove('newplace');
    }
    navIcon.classList.toggle('active');

});
document.addEventListener("click",(e)=>{// close nav for any ohter click
    if(e.target !== navIcon && e.target !== elementUl ){    
       if(navIcon.classList.contains('active')){ /// check if nav open 
            navIcon.classList.remove('active');
       }
    }
});
elementUl.onclick = function(e){//stop propagation on the menu 
    e.stopPropagation();
}

/***  img slider handle  */
let landingPage=document.querySelector('.landing');
let sliderImages=['bg-1.jpg' ,'bg-2.jpg', 'bg-3.jpg','bg-4.jpg','bg-5.jpg'];
let slideCount=sliderImages.length;
let currentSlide = 1;
let previousButton = document.getElementById('angle-left');
let  nextButton=document.getElementById('angle-right');

nextButton.onclick = nextSlide;
previousButton.onclick = previousSlide;
let paginationElement=document.createElement('ul');//create ul element 
paginationElement.setAttribute('id','bullets');
for(let i=1;i<=slideCount ; i++){ //create li element  based on slides count
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i);//data-set 
    paginationElement.appendChild(paginationItem); //apend items to the ul
}
document.getElementById('indicators').appendChild(paginationElement);//apend to the page
let paginationCreatedUl=document.getElementById('bullets');
let  paginationsBullets= Array.from(document.querySelectorAll('#bullets li')); 
for( let i=0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        thecheker();
    }
}
thecheker();
function nextSlide(){// next slide function 
    if(nextButton.classList.contains('disabled')){
    }else{
        currentSlide++;
        thecheker();
    }
}

function previousSlide(){// Previous slide function 
    if(previousButton.classList.contains('disabled')){
    }else{
        currentSlide--;
        thecheker();
    }
}

function thecheker(){
   
    removeAllActive();

    landingPage.style.backgroundImage='url("images/' + sliderImages[ currentSlide - 1] + '")';

    paginationCreatedUl.children[ currentSlide - 1 ].classList.add('active-2');

    if( currentSlide == 1){
            previousButton.classList.add('disabled');
    }else{
            previousButton.classList.remove('disabled');
    }
    if( currentSlide == slideCount ){
        nextButton.classList.add('disabled');
   }else{
        nextButton.classList.remove('disabled');
   }
}

function removeAllActive(){
    //remove any  backgroundImage from the landing page 
    landingPage.style.backgroundImage='none';

    paginationsBullets.forEach((bullet)=>{//remove active class
        bullet.classList.remove('active-2');
    });
}

/***  changing on action */
const imagesholder = [
    {
        name:"education",
        Text:'learning from videos',
        img:"images/education-1.jpg"
    },
    {
        name:"education",
        Text:'reading books',
        img:"images/education-2.jpg"
    },
    {
        name:"education",
        Text:'graduate from univercity',
        img:"images/education-3.jpg"
    },
    {
        name:"code",
        Text:'front-end',
        img:"images/web-1.jpg"
    },
    {
        name:"code",
        Text:'back-end',
        img:"images/web-2.jpg"
    },
    {
        name:"code",
        Text:'mobile',
        img:"images/web-3.jpg"
    },
        {
        name:"nature",
        Text:'',
        img:"images/bg-4.jpg"
    },
    {
        name:"nature",
        Text:'',
        img:"images/bg-2.jpg"
    },
    {
        name:"nature",
        Text:'',
        img:"images/bg-3.jpg"
    },
    {
        name:"machine",
        Text:'',
        img:"images/satellite.png",
        Num:'9'
    },
    {
        name:"machine",
        Text:'Design mecanique items ',
        img:"images/robot.png",
        Num:'10'
    },
    {
        name:"machine",
        Text:'3D modeling',
        img:"images/care-3d.jpg",
        Num:'11'
    },


]
let allBtn = document.querySelectorAll('.shuffle li');
allBtn.forEach(li => {
    li.addEventListener('click',(e)=>{
        if(e.target.dataset.btn !== 'All'){// more btn manipulation 
            document.querySelector('.more').classList.add('hide');
        }else{
            document.querySelector('.more').classList.remove('hide');     
            document.querySelector('.more').addEventListener('click',()=>{// (more) btn open
                for(let i=0 ; i<imagesholder.length ; i++){   
                    document.querySelectorAll('#imgHolder .box').forEach(box =>{//remove all the popup box
                        // console.log(box.dataset.box);
                        // console.log('____');
                        // console.log(imagesholder[i].Num);
                        if(box.dataset.box >=parseInt(imagesholder[i].Num) ){
                            box.remove();
                        }
                    }); 
                    if(imagesholder[i].name ==='machine'){
                        imgcheker(i);
                    }
                } 
                document.querySelector('.more').classList.add('hide');              
            });
        }
       //remove all the popup box 
       document.querySelectorAll('#imgHolder .box').forEach(box =>{ 
            box.remove();
        });
        // active class manipulation 
        allBtn.forEach(li => {
            li.classList.remove('active');
        })
        li.classList.add('active');
        // add the popup 
        for(let i=0 ; i<imagesholder.length ; i++){
            if(e.target.dataset.btn === imagesholder[i].name){
                imgcheker(i);
            }
            if( e.target.dataset.btn ==='All' && imagesholder[i].name !=='machine'){
                imgcheker(i);
            }
        }
    });
});

function imgcheker(i){
    //create box element 
    let boxDiv=document.createElement('div');
    boxDiv.className ='box';
    boxDiv.setAttribute('data-box',i);//data-set

    //create img element 
    let imgElement=document.createElement('img');
    imgElement.src = imagesholder[i].img;

    //create a caption element 
    let captionElement=document.createElement('div');
    captionElement.className ='caption';

    //set h4 & p to the caption 
    let captionElementh4=document.createElement('h4');
    let captionElementp=document.createElement('p');

    //create text for heading 
    let imgTexth4 = document.createTextNode(imagesholder[i].name);
    captionElementh4.appendChild(imgTexth4);//append 

    //create text for <p>
    let imgTextp = document.createTextNode(imagesholder[i].Text); 
    captionElementp.appendChild(imgTextp);//append

    //append 
    captionElement.appendChild(captionElementh4);
    captionElement.appendChild(captionElementp);
    boxDiv.appendChild(imgElement);
    boxDiv.appendChild(captionElement);

    //add the created ul element to the page 
    document.getElementById('imgHolder').appendChild(boxDiv);
}

/*** video manipulation*/ 
const seeMore = document.getElementById("btn-text");
const btns =document.querySelectorAll(".video .video-holder figure");
const slides =document.querySelectorAll(".video-slider");
seeMore.addEventListener('click',()=>{
    btns.forEach((btn)=>{
        (btn.classList.contains("active"))?(seeMore.innerText='see more'):(seeMore.innerText='less');
        btn.classList.toggle('active');
    });
});
let slidernav =(i)=>{
    btns.forEach((btn)=>{
        btn.classList.remove('ON');
    });
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    btns[i].classList.add("ON");
    slides[i].classList.add("active");
}
btns.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
        slidernav(i);
    });     
});

/*** increase number on scroll*/
let number=document.querySelectorAll('.box .number');
let statsSection =document.querySelector('.stats');
let started=false;
let addnumber=400;

window.onscroll = function(){
    if(window.scrollY >= statsSection.offsetTop - addnumber){
        if(!started){
            number.forEach((num)=>startCount(num));
        }
        started=true;
    }
};

function startCount(el){
    let finalnum = el.dataset.num;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == finalnum){
            clearInterval(count);
        }
    }, 2000 / finalnum );
}

/*** slider 2 */
const qoutes=[
    {
        qouteValue:"\" your time is limited, so dont waste it living someqne else life \"",
        personName:" Steve Jobs",
        img:'images/img-1.PNG'
    },
    {
        qouteValue:" \" Tell me and I forget . teach me and I rememper . Involve me and I learn \"",
        personName:" Benjamin Franklin",
        img:'images/avatar-1.jpg'
    },
    {
        qouteValue:"\" if you want to live a happy life, tie it to a goal, not to people or things \"",
        personName:" Albert Einstein",
        img:'images/subscribe.jpg'
    },
    {
        qouteValue:"\" the best way to find yourself is to lose yourself in the service of others \"",
        personName:" Mahtma Gandhi",
        img:'images/avatar-4.jpg'
    },
    {
        qouteValue:" \" the journey of a thousand miles begins with one step. \"",
        personName:" lao Tzu",
        img:'images/avatar-2.jpg'
    },
    {
        qouteValue:"\" our life began to end the day we become silent about thing that  matter \"",
        personName:"Martin Luther King, Jr",
        img:'images/avatar-3.jpg'
    },

]
let slideCounttow=qoutes.length/2;
let currentSlidetow = 1; 
let ulElement=document.createElement('ul');//create ul element
ulElement.className='bullets';
for(let i=1;i<=slideCounttow ; i++){//create li element  based on slides count
    let liElement = document.createElement('li');//create li 
    liElement.setAttribute('data-index',i);//data-set 
    ulElement.appendChild(liElement);//apend 
}
document.getElementById('firstpage').appendChild(ulElement);//add the created ul element to the page
let newUlelement=document.querySelector('.skills .firstpage .bullets');
newUlelement.children[0].classList.add('active');
let  liBullets= Array.from(document.querySelectorAll('.skills .firstpage  .bullets li')); 
for( let i=0; i < liBullets.length; i++){
    liBullets[i].onclick = function(){
        currentSlidetow=parseInt(this.getAttribute('data-index'));
        thenewcheker();
    }
}

function thenewcheker(){ 
    liBullets.forEach((bullet)=>{//remove All Active 
        bullet.classList.remove('active');
    });
    let boxarray = Array.from(document.querySelectorAll('.skills .firstpage .box'));
    if(currentSlidetow === 1){// first slid
        for(let i=0;i<2;i++){
            boxarray[i].children[0].src=qoutes[i].img;
            boxarray[i].children[1].textContent=qoutes[i].qouteValue;
            boxarray[i].children[2].textContent=qoutes[i].personName;
        }
    }else if(currentSlidetow === 2){//second slid
        for(let i=0;i<2;i++){
            boxarray[i].children[0].src=qoutes[i+2].img;
            boxarray[i].children[1].textContent=qoutes[i+2].qouteValue;
            boxarray[i].children[2].textContent=qoutes[i+2].personName;
        }
    }else{//last slid
        for(let i=0;i<2;i++){
            boxarray[i].children[0].src=qoutes[i+4].img;
            boxarray[i].children[1].textContent=qoutes[i+4].qouteValue;
            boxarray[i].children[2].textContent=qoutes[i+4].personName;
        }
    }
    newUlelement.children[currentSlidetow - 1].classList.add('active');//set active class 
}
































