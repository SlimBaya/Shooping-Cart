
// first 
var  mariocounter
var mariocounter=0
function MarioCounterPlus(){
    mariocounter ++
    document.getElementById("mariocounter").innerHTML=mariocounter
}
function MarioCounterMinus(){
    if (mariocounter > 0)
    {
    mariocounter --
    document.getElementById("mariocounter").innerHTML=mariocounter
}
}

var nursecounter
var nursecounter=0
function NurseCounterPlus(){
    nursecounter ++
    document.getElementById("nursecounter").innerHTML=nursecounter
}
function NurseCounterMinus(){
    if (nursecounter > 0)
    {nursecounter --
    document.getElementById("nursecounter").innerHTML=nursecounter
}
}

var policecounter
var policecounter=0
function PoliceCounterPlus(){
    policecounter ++
    document.getElementById("policecounter").innerHTML=policecounter
}
function PoliceCounterMinus(){
    if (policecounter > 0){
    policecounter --
    document.getElementById("policecounter").innerHTML=policecounter
}
}

var mariototalprice
var Mario
function MairoTotalPrice() {
    document.getElementById("mariototalprice").innerHTML="Total Price : " + mariocounter*49 + " $"
    
}

var nursetotalprice
function NurseTotalPrice() {
    document.getElementById("nursetotalprice").innerHTML="Total Price : " + nursecounter*45 + " $"
}

var policetotalprice
function PoliceTotalPrice() {
    document.getElementById("policetotalprice").innerHTML="Total Price : " + policecounter*42 + " $"
}

// function TotalPrice() {
//    document.getElementById("bagtotalprice").innerHTML=mariocounter*49+nursecounter*45+policecounter*42+ " $"
// }

var Mario
var m=document.getElementById("Mario")
function MarioRemove () {
    if (m.style.display === "none") {
        m.style.display = "block"
    } else {
        m.style.display = "none"
    }
}

var Nurse
var n=document.getElementById("Nurse")
function NurseRemove () {
    if (n.style.display === "none") {
        n.style.display = "block"
    } else {
        n.style.display = "none"
    }
}

var Police
var p=document.getElementById("Police")
function PoliceRemove () {
    if (p.style.display === "none") {
        p.style.display = "block"
    } else {
        p.style.display = "none"
    }
}

// second

var  spidermancounter
var spidermancounter=0
function SpidermanCounterPlus(){
    spidermancounter ++
    document.getElementById("spidermancounter").innerHTML=spidermancounter
}
function SpidermanCounterMinus(){
    if (spidermancounter > 0)
    {
    spidermancounter --
    document.getElementById("spidermancounter").innerHTML=spidermancounter
}
}

var nursecounter
var nursecounter=0
function NurseCounterPlus(){
    nursecounter ++
    document.getElementById("nursecounter").innerHTML=nursecounter
}
function NurseCounterMinus(){
    if (nursecounter > 0)
    {nursecounter --
    document.getElementById("nursecounter").innerHTML=nursecounter
}
}

var policecounter
var policecounter=0
function PoliceCounterPlus(){
    policecounter ++
    document.getElementById("policecounter").innerHTML=policecounter
}
function PoliceCounterMinus(){
    if (policecounter > 0){
    policecounter --
    document.getElementById("policecounter").innerHTML=policecounter
}
}

var spidermantotalprice
var spiderman
function SpidermanTotalPrice() {
    document.getElementById("spidermantotalprice").innerHTML="Total Price : " + spidermancounter*47 + " $"
    
}

var nursetotalprice
function NurseTotalPrice() {
    document.getElementById("nursetotalprice").innerHTML="Total Price : " + nursecounter*45 + " $"
}

var policetotalprice
function PoliceTotalPrice() {
    document.getElementById("policetotalprice").innerHTML="Total Price : " + policecounter*42 + " $"
}



function TotalPrice() {
   document.getElementById("bagtotalprice").innerHTML=mariocounter*49+nursecounter*45+policecounter*42 + " $"
}