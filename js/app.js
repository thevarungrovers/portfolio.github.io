// img change
function lighttodark(){
    if(document.getElementById('lightmode').src === 'https://i.ibb.co/48YTdQ6/light-mode.png')
    {
        // dark mode
        document.getElementById('lightmode').src = 'https://i.ibb.co/fpDLnxM/dark-mode.png';
        document.getElementById('darkfooter').src = 'https://i.ibb.co/F0mYrgT/white-code-png.png'
    }
    else
    {
        // light mode
        document.getElementById('lightmode').src = 'https://i.ibb.co/48YTdQ6/light-mode.png'
        document.getElementById('darkfooter').src = 'https://www.flaticon.com/svg/static/icons/svg/13/13706.svg'
    }
}

// background color
function colorchange(){
    if(document.getElementById('lightmode').src === 'https://i.ibb.co/48YTdQ6/light-mode.png')
    {
        // dark mode
        document.body.style.background = '#ecf0f1'
    }
    else
    {
        // light mode
         document.body.style.background = '#636e72' 
    }
}

// text color change
function textchange(){
    if(document.getElementById('lightmode').src === 'https://i.ibb.co/48YTdQ6/light-mode.png')
    {
        // light mode
        document.getElementById('wrapper').style.color = 'black';
        document.getElementById('headtitle').style.color = 'black';

    }
    else
    {
        // dark mode
        document.getElementById('wrapper').style.color = '#f5f6fa';
        document.getElementById('headtitle1').style.color = '#f5f6fa';
        document.getElementById('headtitle2').style.color = '#f5f6fa';
        document.getElementById('headtitle3').style.color = '#f5f6fa';
        document.getElementById('headtitle4').style.color = '#f5f6fa';
        document.getElementById('headtitle5').style.color = '#f5f6fa';

    }
}

