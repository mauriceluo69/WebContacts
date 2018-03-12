function login1() {
    if (document.getElementById("field1").value == "") {
        document.getElementById("warn1").innerHTML = "请输入姓名";
        document.getElementById("field1").focus();
        return false;
    } else {
        var AllNumIsSame = new Array("’", "”", "!", "@", "#", "$", "%", "^", "&", "*", ".");
        var GetInputValue = document.getElementById("field1").value;
        for (var i = 0; i < AllNumIsSame.length; i++) {
            if (GetInputValue.indexOf(AllNumIsSame[i]) != -1) {
                document.getElementById("warn1").innerHTML = "姓名中请不要含有特殊字符";
                document.getElementById("field1").focus();
                return false;
            }
        }
        document.getElementById("warn1").innerHTML = "";
        return true;
    }
}

function login2() {
    if (document.getElementById("field2").value == "") {
        document.getElementById("warn2").innerHTML = "请输入住址";
        document.getElementById("field2").focus();
        return false;
    } else {
        document.getElementById("warn2").innerHTML = "";
        return true;
    }
}

function login3() {
    if (document.getElementById("field3").value == "") {
        document.getElementById("warn3").innerHTML = "请输入email";
        document.getElementById("field3").focus();
        return false;
    } else {
        document.getElementById("warn3").innerHTML = "";
        var GetInputValue = document.getElementById("field3").value;
        if (checkemail(GetInputValue) == false) {
            document.getElementById("warn3").innerHTML = "请输入正确的email格式";
            return false;
        }
        document.getElementById("warn3").innerHTML = "";
        return true;
    }
}

function checkemail(value) {
    var Regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (Regx.test(value) == true) {
        return true;
    } else {
        return false;
    }
}

function login4() {
    if (document.getElementById("field4").value == "") {
        document.getElementById("warn4").innerHTML = "请输入QQ";
        document.getElementById("field4").focus();
        return false;
    } else {
        if (isNaN(document.getElementById("field4").value) == true) {
            document.getElementById("warn4").innerHTML = "请输入纯数字组成的QQ";
            document.getElementById("field4").focus();
            return false;
        }
        document.getElementById("warn4").innerHTML = "";
        return true;
    }
}

function login5() {
    if (document.getElementById("field5").value == "") {
        document.getElementById("warn5").innerHTML = "请输入电话号码";
        document.getElementById("field5").focus();
        return false;
    } else {
        if (isNaN(document.getElementById("field5").value) == true) {
            document.getElementById("warn5").innerHTML = "请输入纯数字组成的电话号码";
            document.getElementById("field5").focus();
            return false;
        }
        document.getElementById("warn5").innerHTML = "";
        return true;
    }
}
function login6() {
    if (login1() && login2() && login3() && login4() && login5())
        document.getElementById("test").submit();
}