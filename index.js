function SetDate() {
    const element = document.getElementById('date');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = months[today.getMonth()];
    const stringToInsert = dayName + ', ' + monthName + ' ' + AddPrefix(today.getDate());
    element.innerHTML = stringToInsert;
}
//actually the postfix 
function AddPrefix(today) {
    let prefix;
    if (today == 1) {
        prefix = 'st';
    }
    else {
        if (today == 2) {
            prefix = 'nd';
        }
        else {
            if (today == 3) {
                prefix = 'rd';
            }
            else {
                prefix = 'th';
            }
        }
    }
    return today + prefix;
}

function FillInspectionCount(count) {
    const element = document.getElementById('count');
    element.innerHTML = count + ' Inspections';
}

function FillUser(user) {
    const element = document.getElementById('offcanvasMenuLabel');
    //toString(user).toUpperCase();
    
    element.innerHTML = user;
}

function ToCreateAppointment() {
    window.location.href = '/calandar';
}

function OpenInMaps(icon) {
    address = icon.closest(".inspection-middle").querySelector("h4").innerHTML;
    console.log(address);
    const url = `https://www.google.com/maps/search/?q=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
}


FillUser('simon troup');
SetDate();
FillInspectionCount(7);