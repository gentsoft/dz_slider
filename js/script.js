const slider = function(opt) {

    if (!opt.name || !opt.btns.left || !opt.btns.right) return;

    const listElem = document.querySelector('#' + opt.name);

    if (!listElem || listElem.children.length <= 1) return;

    const btnLeft = document.querySelector('#' + opt.btns.left);
    const btnRight = document.querySelector('#' + opt.btns.right);

    if (!btnLeft || !btnRight) return;

    const prevNext = function() {
        let x = listElem.style.transform;

        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '');
            x = Math.abs(x);
        }
        
        const dir = (this == btnLeft) ? 'prev' : 'next';

        x += 100 * (dir == 'prev' ? -1 : 1);

        const stopPoint = (listElem.children.length - 1) * 100;

        if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        else if (x > stopPoint) listElem.style.transform = `translateX(0%)`;
        
        if (dir == 'prev' && x < 0) listElem.style.transform = `translateX(-${stopPoint}%)`;
    };

    btnLeft.addEventListener('click', prevNext);
    btnRight.addEventListener('click', prevNext);

    const prevInside = function(){

        btnCominList = document.querySelectorAll('.conteiner__buttons_comin');         

            for(let i = 0, num = 0;i < btnCominList.length;i++){
                let n = 0;
                n = btnCominList[i];
                num ++;
                n.addEventListener('click', function(){
                    let x = listElem.style.transform;

                    if (!x) {
                        x = 0;
                    } else {
                        x = x.replace('translateX(', '');
                        x = x.replace('%)', '');
                        x = Math.abs(x);
                    }

                    x = 100 * (num - 1);

                    listElem.style.transform = `translateX(-${x}%)`;
                    console.log('Переключаем на слайд № ',num)
                })
            }
    }

    

    const prevInsideBut = function () {
        let conteinerButtons = document.querySelector('.conteiner__buttons');
        let moreButuns = listElem.children.length;
        let divElem = document.createElement('div');
        divElem.className = "conteiner__buttons_comin";
            for(let i = 0; i < moreButuns; i++){
                let divElem = document.createElement('div');
                divElem.className = "conteiner__buttons_comin";
                conteinerButtons.append(divElem);
            }
        
        prevInside();
        
    }

    prevInsideBut();


    const prevTime = function(){
        let prevWindow = document.querySelector('.slider__wrapper');

            
        let t = 0,
            timeInit = true;

        let time = function(){
            const timeLeng = 5000;

            prevWindow.addEventListener('mouseover', function(){
                timeInit = false;
                console.log('мыш привет');
            });

            prevWindow.addEventListener('mouseout', function(){
                timeInit = true;
                console.log('мыш пака');
            });

            if(timeInit == true){
                if(t > listElem.children.length - 1){
                    t = 0;
                }
                console.log(t)
                t++;
                let x = listElem.style.transform;
                if (!x) {
                    x = 0;
                } else {
                    x = x.replace('translateX(', '');
                    x = x.replace('%)', '');
                    x = Math.abs(x);
                }
                x = 100 * (t-1);
                listElem.style.transform = `translateX(-${x}%)`;
                setTimeout(time, timeLeng);
            }else{
                setTimeout(time, timeLeng);
            }
        }

        time();
        
    }
    
    prevTime();

};

window.addEventListener('load', function() {
    
    const slider1_options = {
        name: 'slider1',
        btns: {
            left: 'slider1_btn_left',
            right: 'slider1_btn_right'
        }
    };

    slider(slider1_options);

});