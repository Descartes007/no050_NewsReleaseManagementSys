<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD><TITLE>��̨������</TITLE>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<LINK href="<%=basePath %>member/images/Admin_Style.css" type=text/css rel=stylesheet>
<LINK href="<%=basePath %>member/images/style.css" type=text/css rel=stylesheet>
<SCRIPT language=JavaScript src="<%=basePath %>member/images/Common.js"></SCRIPT>
<STYLE type=text/css>BODY {
	MARGIN-LEFT: 0px; BACKGROUND-COLOR: #ffffff
}
</STYLE>
<META content="MSHTML 6.00.2900.3243" name=GENERATOR></HEAD>
<script type="text/javascript">
function check()
{
	if(document.form1.oldpwd.value=="")
	{
		alert("����������룡");
		document.form1.oldpwd.focus();
		return false;
	}
	if(document.form1.newpwd.value=="")
	{
		alert("�����������룡");
		document.form1.newpwd.focus();
		return false;
	}
	if(document.form1.newpwd.value.length<6||document.form1.newpwd.value.length>16)
	{
		alert("����Ϊ6-16λ֮�䣡");
		document.form1.newpwd.focus();
		return false;
	}
	if(document.form1.repwd.value=="")
	{
		alert("��ȷ�����룡");
		document.form1.repwd.focus();
		return false;
	}
	if(document.form1.repwd.value!=document.form1.newpwd.value)
	{
		alert("�Բ���������������벻��ͬ����ȷ�����룡");
		document.form1.repwd.focus();
		return false;
	}
}
</script>
<%
String message = (String)request.getAttribute("message");
	if(message == null){
			message = "";
	}
	if (!message.trim().equals("")){
		out.println("<script language='javascript'>");
		out.println("alert('"+message+"');");
		out.println("</script>");
	}
	request.removeAttribute("message");
%>
<%
	String member=(String)session.getAttribute("member");
	String type=(String)session.getAttribute("type");
	if(member==null||type==null){
		response.sendRedirect(path+"/error.jsp");
	}
	else{
%>
<BODY oncontextmenu="return false;" onselectstart="return false;" leftMargin=0 
background=<%=basePath %>member/images/MainBg.gif topMargin=0 scroll=no 
marginheight="0" marginwidth="0"><br><br><br>
<TABLE align="center" height="100%" cellSpacing=0 cellPadding=0 width="40%" border=0>
  <TBODY>
  <TR>
    <TD vAlign=top height="50%">
	<form action="<%=basePath %>Member" method="post" name="form1" onSubmit="return check()">
		 <TABLE width="100%" border=0 align="center" cellPadding=3 cellSpacing=1 class=tablewidth>
			<TBODY>
			<TR class=head>
			<TD colSpan=2 height=23>�޸ĺ�̨��¼���� ��ǰ�û���<FONT color=red><%=member %></FONT>&nbsp;&nbsp;������Ϊ6-16λ֮�䣩</TD></TR>
			<TR bgColor=#ffffff>
			<TD width="50%" align="right" id=map>�� �� �룺<input type="hidden" name="method" value="Editpwd"/></TD>
			<TD width="50%" align="left" id=map><input type="password" name="oldpwd" size="20" maxlength=16  class=input onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')"></TD></TR>
			<TR bgColor=#ffffff>
			<TD width="50%" align="right" id=map>�� �� �룺</TD>
			<TD width="50%" align="left" id=map><input type="password" name="newpwd" size="20" maxlength=16 class=input onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')"></TD>
			</TR>
			<TR bgColor=#ffffff>
			<TD width="50%" align="right" id=map>ȷ�����룺</TD>
			<TD width="50%" align="left" id=map><input type="password" name="repwd" size="20" maxlength=16 class=input onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')"></TD>
			</TR>
			<TR bgColor=#ffffff>
			<TD colspan="2" align="center" id=map><input type="submit" value="ȷ��">&nbsp;&nbsp;<input type="reset" value="����"></TD>
			</TR>
			</TBODY>
		</TABLE>
	</form>
   </TD></TR>
</TBODY></TABLE>
</BODY>
<%} %>
</HTML>
