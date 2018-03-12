function login(thisform) 
{
    if ((document.getElementById("user").value == "" ) && (document.getElementById("pswd").value == "")) 
	{
        document.getElementById("warn").innerHTML = "请输入用户名和密码";
        document.getElementById("user").focus();
		document.getElementById("pswd").focus();
        return false
    } 
	else if(document.getElementById("user").value == "") 
	{
		document.getElementById("warn").innerHTML = "请输入用户名";
		document.getElementById("user").focus();
        return false
    }
	else if(document.getElementById("pswd").value == "")
	{
		document.getElementById("warn").innerHTML = "请输入密码";
		document.getElementById("pswd").focus();
        return false
	}
	else
	{
		document.getElementById("warn").innerHTML = "";
        return true
	}
	document.loginForm.submit();
}
