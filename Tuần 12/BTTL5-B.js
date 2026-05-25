document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("res_NameSender").innerText = sessionStorage.getItem("ss_NameSender") || "Trống";
    document.getElementById("res_EmailSender").innerText = sessionStorage.getItem("ss_EmailSender") || "Trống";
    document.getElementById("res_PhoneSender").innerText = sessionStorage.getItem("ss_PhoneSender") || "Trống";
    document.getElementById("res_NameReceiver").innerText = sessionStorage.getItem("ss_NameReceiver") || "Trống";
    document.getElementById("res_PhoneReceiver").innerText = sessionStorage.getItem("ss_PhoneReceiver") || "Trống";
    document.getElementById("res_AddressReceiver").innerText = sessionStorage.getItem("ss_AddressReceiver") || "Trống";
    document.getElementById("res_City").innerText = sessionStorage.getItem("ss_City") || "Trống";
    document.getElementById("res_District").innerText = sessionStorage.getItem("ss_District") || "Trống";

    sessionStorage.removeItem("ss_NameSender");
    sessionStorage.removeItem("ss_EmailSender");
    sessionStorage.removeItem("ss_PhoneSender");
    sessionStorage.removeItem("ss_NameReceiver");
    sessionStorage.removeItem("ss_PhoneReceiver");
    sessionStorage.removeItem("ss_AddressReceiver");
    sessionStorage.removeItem("ss_City");
    sessionStorage.removeItem("ss_District");
    
    console.log("Dữ liệu đã xuất ra màn hình và xóa khỏi Session thành công.");
});

function QuayLai() {
    window.location.href = "BTTL1.html";
}