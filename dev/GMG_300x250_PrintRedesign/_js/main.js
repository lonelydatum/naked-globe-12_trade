import globe from '../../_common/js/globe'

import data from './data.js'



function doDesktop(){
    const domMain = document.getElementById('desktop')
    const domDevice = domMain.querySelector('.device')
    const domContent1 = document.getElementById('desktop-content1')
    const domContent2 = document.getElementById('desktop-content2')
    domDevice.src = data.desktop.data
    domContent1.src = data.desktop.data
    domContent2.src = data.desktop.data
}


function doPhone(){
    const name = 'phone'
    const domMain = document.getElementById(name)
    const domDevice = domMain.querySelector('.device')
    const domContent = domMain.querySelector('.content')
    domDevice.src = data[name].data
    domContent.src = data[name].data
}

function doTablet(){
    const name = 'tablet'
    const domMain = document.getElementById(name)
    const domDevice = domMain.querySelector('.device')
    const domContent = domMain.querySelector('.content')
    domDevice.src = data[name].data
    domContent.src = data[name].data
}

doDesktop()
doPhone()
doTablet()


globe(data, .5)