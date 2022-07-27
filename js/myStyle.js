console.log("shoaib");

const changeImage = document.getElementById('department_name')
const departmentName = changeImage.innerText

const mainUrl = `https://www.pust.ac.bd/includes/images/dept_img`
const showImage = document.getElementById('show_image')

const dName = ["ICE.jpg", "ETE.jpg", "EEE.jpg", "CSE.jpg", "CE.jpg", "ARCH.jpg", "URP.jpg", "PHARM.jpg", "CHEM.jpg", "MATH.jpg", "STAT.jpg", "B.%20Admin.jpg", "ECO.jpg", "BAN.jpg", "SW.jpg", "ENG.jpg", "PA.jpg", "HBS.jpg", "GE.jpg"]


if (departmentName == "ICE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[0]}`
}
if (departmentName == "EECE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[1]}`
}
if (departmentName == "EEE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[2]}`
}
if (departmentName == "CSE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[3]}`
}
if (departmentName == "CIVIL") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[4]}`
}
if (departmentName == "ARCHITECTURE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[5]}`
}
if (departmentName == "URBAN") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[6]}`
}
if (departmentName == "PHYSICS") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[7]}`
}
if (departmentName == "CHEMISTRY") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[8]}`
}
if (departmentName == "MATHMATICS") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[9]}`
}
if (departmentName == "STATISTIC") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[10]}`
}
if (departmentName == "PHARMACY") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[11]}`
}
if (departmentName == "BBA") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[12]}`
}
if (departmentName == "THM") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[13]}`
}

/////////////////


if (departmentName == "ECHONOMIC") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[14]}`
}
if (departmentName == "BANGLA") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[15]}`
}
if (departmentName == "SOCIAL WORK") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[16]}`
}
if (departmentName == "ENGLISH") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[17]}`
}
if (departmentName == "PUBLIC AD") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[18]}`
}
if (departmentName == "HBS") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[19]}`
}
if (departmentName == "GE") {
    showImage.style.backgroundImage = `url(${mainUrl}/${dName[20]}`
}
