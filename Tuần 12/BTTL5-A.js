function XuatThongTin() {
    document.getElementById("resultArea").style.display = "block";
}

function XuatThongTinTrangKhac() {
    sessionStorage.setItem("ss_NameSender", document.getElementById("txt_NameSender").value);
    sessionStorage.setItem("ss_EmailSender", document.getElementById("txt_EmailSender").value);
    sessionStorage.setItem("ss_PhoneSender", document.getElementById("txt_PhoneSender").value);
    sessionStorage.setItem("ss_NameReceiver", document.getElementById("txt_NameReceiver").value);
    sessionStorage.setItem("ss_PhoneReceiver", document.getElementById("txt_PhoneReceiver").value);
    sessionStorage.setItem("ss_AddressReceiver", document.getElementById("txt_AddressReceiver").value);
    sessionStorage.setItem("ss_City", document.getElementById("ddl_City").value);
    sessionStorage.setItem("ss_District", document.getElementById("ddl_District").value);

    window.location.href = "BTTL5-B.html";
}