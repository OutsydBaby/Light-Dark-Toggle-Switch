toggleSwitch = document.getElementById('toggleBtn');

toggleSwitch.addEventListener('change', switchBackground, false);

function switchBackground(e){
    if(e.target.checked){
        document.body.classList.add('darkmode');
        document.body.classList.remove('lightmode');
        console.log("on");
    }else{
        document.body.classList.add('lightmode');
        document.body.classList.remove('darkmode');
        console.log("off");
    }
}